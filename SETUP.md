# NailStudio Setup Guide

A Gen-Z aesthetic press-on nail ecommerce and booking platform built with Next.js, Supabase, and Vercel.

## Features

- 💅 E-commerce shop with product catalog, filtering, and search
- 📅 Booking system for custom nail appointments
- 🛒 Shopping cart with persistent storage
- 💳 Payment via Venmo or Zelle
- 🎨 Gen-Z/TikTok inspired design with glassmorphism and gradient effects
- 📱 Mobile-first responsive design
- ✨ Smooth animations with Framer Motion
- 🔐 Supabase authentication and database
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React, TypeScript
- **Styling**: Tailwind CSS with custom Gen-Z aesthetic
- **Database**: Supabase (PostgreSQL)
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. Go to SQL Editor and run the schema from `supabase/schema.sql`

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

Replace with your actual Supabase credentials.

### 4. Update Payment Information

In the database, update the business settings with your actual payment details:

```sql
UPDATE business_settings
SET value = '{"venmo": "@your-venmo-username", "zelle": "your-zelle-email@example.com"}'::jsonb
WHERE key = 'payment_info';
```

### 5. Add Product Images (Optional)

The app currently uses placeholder emojis for products. To add real images:

1. Upload images to Supabase Storage or your preferred CDN
2. Update the `image_url` and `images` fields in the products table
3. Update the product display components to show images instead of emojis

You can use the Unsplash image as a reference:
```
https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1364&q=80
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Add environment variables in the Vercel dashboard
4. Deploy!

### Option 2: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY

# Deploy to production
vercel --prod
```

## Database Schema

The database includes tables for:

- **products** - Press-on nail sets and accessories
- **services** - Booking services (consultations, custom designs)
- **bookings** - Appointment bookings
- **orders** - Customer orders
- **order_items** - Individual items in orders
- **cart_items** - Shopping cart for logged-in users
- **profiles** - User profiles with payment preferences
- **reviews** - Product reviews
- **business_settings** - Store configuration

## Customization

### Colors & Branding

Edit `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: #ff6b9d;      /* Main pink color */
  --secondary: #c084fc;    /* Purple accent */
  --accent: #fbbf24;       /* Yellow/gold accent */
  --muted: #f3e8ff;        /* Light background */
}
```

### Business Information

Update business settings in the database:

```sql
-- Opening hours
UPDATE business_settings
SET value = '{"monday": {"open": "10:00", "close": "18:00"}, ...}'::jsonb
WHERE key = 'opening_hours';

-- Contact info
UPDATE business_settings
SET value = '{"email": "your@email.com", "phone": "(555) 123-4567", "address": "Your Address"}'::jsonb
WHERE key = 'contact_info';
```

### Add Sample Products

Sample products are already included in the schema. To add more:

```sql
INSERT INTO products (name, description, price, category, stock_quantity, is_featured, tags)
VALUES (
  'Your Product Name',
  'Product description',
  29.99,
  'press-on',
  50,
  true,
  ARRAY['tag1', 'tag2']
);
```

## Payment Processing

The app uses Venmo/Zelle for payments:

1. Customer places order and enters their payment info
2. Order is created with "pending" payment status
3. Customer sends payment via Venmo/Zelle
4. You manually confirm payment and update order status
5. Ship the order!

To mark an order as paid:

```sql
UPDATE orders
SET payment_status = 'paid', status = 'processing'
WHERE id = 'order-id';
```

## Authentication (Optional)

Supabase Auth is configured but not required for basic functionality. To enable user accounts:

1. Enable email auth in Supabase dashboard
2. Add sign up/login pages
3. Use the pre-configured Supabase client utilities

## Support

For issues or questions:
- Check the Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Supabase docs: [supabase.com/docs](https://supabase.com/docs)
- Review the code comments for implementation details

## License

MIT - Feel free to use this for your own nail business!
