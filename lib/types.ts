export interface Product {
  id: string
  created_at: string
  name: string
  description: string | null
  price: number
  image_url: string | null
  images: string[] | null
  category: string
  stock_quantity: number
  is_featured: boolean
  tags: string[] | null
  sizes: string[]
}

export interface Service {
  id: string
  created_at: string
  name: string
  description: string | null
  duration_minutes: number
  price: number
  is_active: boolean
}

export interface Booking {
  id: string
  created_at: string
  user_id: string | null
  service_id: string | null
  booking_date: string
  booking_time: string
  status: string
  customer_name: string
  customer_email: string
  customer_phone: string | null
  notes: string | null
  payment_status: string
  payment_method: string | null
}

export interface Order {
  id: string
  created_at: string
  user_id: string | null
  status: string
  total_amount: number
  customer_name: string
  customer_email: string
  customer_phone: string | null
  shipping_address: ShippingAddress
  payment_status: string
  payment_method: string | null
  payment_details: any
  tracking_number: string | null
}

export interface OrderItem {
  id: string
  created_at: string
  order_id: string
  product_id: string | null
  quantity: number
  size: string | null
  price_at_time: number
}

export interface CartItem {
  id: string
  created_at: string
  user_id: string
  product_id: string
  quantity: number
  size: string | null
  product?: Product
}

export interface Profile {
  id: string
  created_at: string
  email: string | null
  full_name: string | null
  phone: string | null
  avatar_url: string | null
  shipping_address: ShippingAddress | null
  venmo_username: string | null
  zelle_email: string | null
}

export interface Review {
  id: string
  created_at: string
  product_id: string
  user_id: string
  rating: number
  comment: string | null
  images: string[] | null
}

export interface ShippingAddress {
  street: string
  city: string
  state: string
  zip: string
  country: string
}

export interface CartItemWithProduct extends CartItem {
  product: Product
}
