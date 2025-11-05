# 💅 NailStudio - Press-On Nail E-commerce & Booking Platform

A modern, Gen-Z aesthetic press-on nail e-commerce and booking platform built with Next.js, Supabase, and Vercel. Features a mobile-first design with TikTok-inspired aesthetics, glassmorphism effects, and smooth animations.

![NailStudio](https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1200&q=80)

## ✨ Features

### E-Commerce
- 🛍️ Product catalog with filtering, search, and categories
- 🏷️ Tag-based organization (glitter, matte, chrome, etc.)
- 🛒 Persistent shopping cart with local storage
- 💳 Checkout with Venmo/Zelle payment options
- 📦 Order management and confirmation emails
- ⭐ Product reviews and ratings system

### Booking System
- 📅 Interactive calendar for appointments
- ⏰ Time slot selection
- 💅 Multiple service types (consultations, custom designs)
- 📧 Booking confirmation
- 💰 Service pricing display

### Design
- 🎨 Gen-Z/TikTok aesthetic with gradients
- ✨ Glassmorphism UI components
- 🎭 Smooth Framer Motion animations
- 📱 Mobile-first responsive design
- 🌙 Dark mode support
- 💫 Floating elements and glow effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **State**: Zustand
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (see .env.local)
# Add your Supabase URL and anon key

# Run database schema (in Supabase SQL Editor)
# Execute supabase/schema.sql

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📋 Setup Guide

See [SETUP.md](./SETUP.md) for detailed setup instructions including:
- Supabase configuration
- Payment setup (Venmo/Zelle)
- Product management
- Deployment to Vercel

## 🗄️ Database

The app uses Supabase with these tables:
- products, services, bookings, orders
- order_items, cart_items, profiles
- reviews, business_settings

Run `supabase/schema.sql` to set up the complete schema with sample data.

## 💳 Payment

Currently supports Venmo and Zelle with manual payment verification. Customers provide their payment username during checkout, then send payment separately.

To upgrade to automated payments, integrate Stripe or PayPal.

## 🎨 Customization

Edit colors in `app/globals.css`:
```css
--primary: #ff6b9d;    /* Main pink */
--secondary: #c084fc;  /* Purple accent */
--accent: #fbbf24;     /* Gold highlights */
```

Update business info in Supabase `business_settings` table.

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

Remember to add environment variables in Vercel dashboard.

## 📸 Using Real Images

Replace emoji placeholders with real product photos:
1. Upload to Supabase Storage
2. Update `image_url` field in products table
3. Modify product display components

Example stock photo: https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1364&q=80

## 📝 License

MIT - Free to use for your nail business!

---

Built with 💅 and [Next.js](https://nextjs.org)
