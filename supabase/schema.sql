-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Products table for nail sets
create table products (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  price decimal(10,2) not null,
  image_url text,
  images text[], -- Array of image URLs
  category text not null, -- 'press-on', 'custom', 'accessory'
  stock_quantity integer default 0,
  is_featured boolean default false,
  tags text[], -- For filtering (e.g., 'glitter', 'matte', 'long', 'short')
  sizes text[] default array['XS', 'S', 'M', 'L', 'XL']::text[]
);

-- Service types for bookings
create table services (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  description text,
  duration_minutes integer not null,
  price decimal(10,2) not null,
  is_active boolean default true
);

-- Bookings/Appointments table
create table bookings (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id) on delete cascade,
  service_id uuid references services(id) on delete set null,
  booking_date date not null,
  booking_time time not null,
  status text default 'pending', -- 'pending', 'confirmed', 'completed', 'cancelled'
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  notes text,
  payment_status text default 'pending', -- 'pending', 'paid', 'refunded'
  payment_method text -- 'venmo', 'zelle', 'cash'
);

-- Orders table for e-commerce
create table orders (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id) on delete set null,
  status text default 'pending', -- 'pending', 'processing', 'shipped', 'delivered', 'cancelled'
  total_amount decimal(10,2) not null,
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  shipping_address jsonb not null,
  payment_status text default 'pending', -- 'pending', 'paid', 'refunded'
  payment_method text, -- 'venmo', 'zelle'
  payment_details jsonb, -- Store venmo/zelle username/details
  tracking_number text
);

-- Order items
create table order_items (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  order_id uuid references orders(id) on delete cascade,
  product_id uuid references products(id) on delete set null,
  quantity integer not null,
  size text,
  price_at_time decimal(10,2) not null
);

-- Cart items (for logged in users)
create table cart_items (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  user_id uuid references auth.users(id) on delete cascade,
  product_id uuid references products(id) on delete cascade,
  quantity integer default 1,
  size text,
  unique(user_id, product_id, size)
);

-- User profiles
create table profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  email text,
  full_name text,
  phone text,
  avatar_url text,
  shipping_address jsonb,
  venmo_username text,
  zelle_email text
);

-- Reviews
create table reviews (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  product_id uuid references products(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  rating integer not null check (rating >= 1 and rating <= 5),
  comment text,
  images text[]
);

-- Business settings (opening hours, etc)
create table business_settings (
  id uuid default uuid_generate_v4() primary key,
  key text unique not null,
  value jsonb not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Row Level Security (RLS) Policies

-- Products: Public read access
alter table products enable row level security;
create policy "Products are viewable by everyone" on products for select using (true);

-- Services: Public read access
alter table services enable row level security;
create policy "Services are viewable by everyone" on services for select using (true);

-- Bookings: Users can view their own bookings
alter table bookings enable row level security;
create policy "Users can view own bookings" on bookings for select using (auth.uid() = user_id);
create policy "Users can insert own bookings" on bookings for insert with check (auth.uid() = user_id);
create policy "Users can update own bookings" on bookings for update using (auth.uid() = user_id);

-- Orders: Users can view their own orders
alter table orders enable row level security;
create policy "Users can view own orders" on orders for select using (auth.uid() = user_id);
create policy "Users can insert own orders" on orders for insert with check (auth.uid() = user_id);

-- Order items: Users can view items from their own orders
alter table order_items enable row level security;
create policy "Users can view own order items" on order_items for select
  using (exists (select 1 from orders where orders.id = order_items.order_id and orders.user_id = auth.uid()));

-- Cart items: Users can manage their own cart
alter table cart_items enable row level security;
create policy "Users can manage own cart" on cart_items for all using (auth.uid() = user_id);

-- Profiles: Users can view and update their own profile
alter table profiles enable row level security;
create policy "Users can view own profile" on profiles for select using (auth.uid() = id);
create policy "Users can update own profile" on profiles for update using (auth.uid() = id);
create policy "Users can insert own profile" on profiles for insert with check (auth.uid() = id);

-- Reviews: Public read, authenticated users can create
alter table reviews enable row level security;
create policy "Reviews are viewable by everyone" on reviews for select using (true);
create policy "Authenticated users can create reviews" on reviews for insert with check (auth.uid() = user_id);
create policy "Users can update own reviews" on reviews for update using (auth.uid() = user_id);
create policy "Users can delete own reviews" on reviews for delete using (auth.uid() = user_id);

-- Business settings: Public read access
alter table business_settings enable row level security;
create policy "Business settings are viewable by everyone" on business_settings for select using (true);

-- Create a trigger to create a profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Insert some sample products
insert into products (name, description, price, image_url, category, stock_quantity, is_featured, tags) values
  ('Sunset Glow', 'Gradient orange and pink press-on nails with holographic finish', 24.99, '/products/sunset-glow.jpg', 'press-on', 50, true, array['gradient', 'holographic', 'medium']),
  ('Velvet Dreams', 'Matte burgundy nails with gold accents', 22.99, '/products/velvet-dreams.jpg', 'press-on', 30, true, array['matte', 'gold', 'long']),
  ('Cloud Nine', 'Soft white and baby blue marble nails', 21.99, '/products/cloud-nine.jpg', 'press-on', 45, false, array['marble', 'pastel', 'short']),
  ('Midnight Sparkle', 'Black nails with silver glitter fade', 26.99, '/products/midnight-sparkle.jpg', 'press-on', 25, true, array['glitter', 'black', 'long']),
  ('Bubblegum Pop', 'Hot pink chrome nails', 23.99, '/products/bubblegum-pop.jpg', 'press-on', 40, false, array['chrome', 'pink', 'medium']);

-- Insert sample services
insert into services (name, description, duration_minutes, price) values
  ('Custom Nail Design Consultation', 'One-on-one consultation to design your perfect custom nail set', 30, 0.00),
  ('Express Nail Application', 'Professional application of your press-on nails', 45, 35.00),
  ('Full Custom Set', 'Completely custom designed and hand-painted nail set', 120, 75.00),
  ('Nail Repair', 'Repair or replace individual nails', 20, 15.00);

-- Insert business settings
insert into business_settings (key, value) values
  ('opening_hours', '{"monday": {"open": "10:00", "close": "18:00"}, "tuesday": {"open": "10:00", "close": "18:00"}, "wednesday": {"open": "10:00", "close": "18:00"}, "thursday": {"open": "10:00", "close": "18:00"}, "friday": {"open": "10:00", "close": "20:00"}, "saturday": {"open": "11:00", "close": "20:00"}, "sunday": {"closed": true}}'::jsonb),
  ('contact_info', '{"email": "hello@nailstudio.com", "phone": "(555) 123-4567", "address": "123 Beauty Lane, Los Angeles, CA 90001"}'::jsonb),
  ('payment_info', '{"venmo": "@nailstudio", "zelle": "payments@nailstudio.com"}'::jsonb);
