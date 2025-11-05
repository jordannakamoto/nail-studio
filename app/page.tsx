'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import BookingFlow from '@/components/booking-flow'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 md:pt-20 md:pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background with Illustration */}
        <div className="absolute inset-0">
          {/* Cloudy Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-white to-blue-50" />

          {/* Hero Illustration - positioned on right side */}
          <div className="hidden md:block absolute right-[10%] top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-60">
            <img
              src="/hand.png"
              alt="Illustration of nail artist"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Gradient overlay to blend illustration */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />

          {/* Glitter Decorations - Static */}
          <svg className="absolute top-12 left-[8%] w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-amber-300" />
          </svg>
          <svg className="absolute top-20 left-[15%] w-2 h-2 opacity-60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-blue-200" />
          </svg>
          <svg className="absolute top-32 right-[12%] w-3 h-3 opacity-75" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-yellow-200" />
          </svg>
          <svg className="absolute top-24 right-[20%] w-2 h-2 opacity-65" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-sky-200" />
          </svg>
          <svg className="absolute top-40 left-[25%] w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-amber-200" />
          </svg>
          <svg className="absolute top-1/3 right-[8%] w-2 h-2 opacity-80" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-cyan-200" />
          </svg>
          <svg className="absolute top-1/2 left-[18%] w-3 h-3 opacity-65" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-yellow-300" />
          </svg>
          <svg className="absolute bottom-1/3 right-[18%] w-2 h-2 opacity-75" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-pink-200" />
          </svg>
          <svg className="absolute bottom-40 left-[22%] w-3 h-3 opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-amber-300" />
          </svg>
          <svg className="absolute bottom-32 right-[25%] w-2 h-2 opacity-60" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-blue-200" />
          </svg>

          {/* Floating cloud-like elements */}
          <div className="absolute top-20 left-10 w-96 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-[500px] h-80 bg-blue-100/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-80 h-64 bg-white/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 font-['Space_Grotesk']">
              <span className="text-foreground">
                Hand-Painted Nails
              </span>
              <br />
              <span className="gradient-text">
                Made With Love
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-foreground/70 max-w-xl mx-auto"
          >
            Handcrafted press-ons in Petaluma & Santa Rosa
          </motion.p>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              {
                name: 'Sunset Glow',
                price: '$24.99',
                description: 'Gradient ombre with shimmer',
                image: 'https://i.etsystatic.com/60597025/r/il/a74f32/7272373322/il_1588xN.7272373322_qsv9.jpg',
                alt: 'Gradient orange and pink press-on nails'
              },
              {
                name: 'Velvet Dreams',
                price: '$22.99',
                description: 'Matte burgundy elegance',
                image: 'https://i.etsystatic.com/46727789/r/il/970bec/7046808740/il_1588xN.7046808740_9a17.jpg',
                alt: 'Burgundy matte press-on nails'
              },
              {
                name: 'Midnight Sparkle',
                price: '$26.99',
                description: 'Black glitter fade',
                image: 'https://i.etsystatic.com/60597025/r/il/99fe57/7340321305/il_1588xN.7340321305_22lq.jpg',
                alt: 'Black glitter press-on nails'
              },
              {
                name: 'Rose Gold Elegance',
                price: '$25.99',
                description: 'Metallic rose shimmer',
                image: 'https://i.etsystatic.com/58065192/r/il/09592f/6899666633/il_1588xN.6899666633_ot4h.jpg',
                alt: 'Rose gold metallic press-on nails'
              },
              {
                name: 'Ocean Breeze',
                price: '$23.99',
                description: 'Turquoise marble effect',
                image: 'https://i.etsystatic.com/55730575/r/il/c01026/6545430953/il_1588xN.6545430953_qr1k.jpg',
                alt: 'Turquoise marble press-on nails'
              },
              {
                name: 'Cherry Blossom',
                price: '$24.99',
                description: 'Soft pink florals',
                image: 'https://i.etsystatic.com/59484680/r/il/a1f578/7329622563/il_1588xN.7329622563_4koc.jpg',
                alt: 'Pink floral press-on nails'
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-2xl overflow-hidden mb-3 shadow-lg hover:shadow-xl transition-all duration-500">
                    {/* Image Container */}
                    <div className="aspect-square overflow-hidden relative">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${product.image})` }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Quick View on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="glass-dark px-4 py-2 rounded-full text-white text-sm font-semibold">
                          View
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="px-1">
                    <h3 className="text-sm md:text-base font-bold mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg md:text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-muted rounded-full text-foreground/70">
                        {product.description.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Booking Flow Section */}
      <BookingFlow />

      {/* Review Spotlight - Etsy Style */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-foreground">Review spotlight</h2>
            <p className="text-sm text-foreground/70">hear what our fave customers are saying 💅✨</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                name: 'keyla gale',
                rating: 4,
                text: 'ok but the quality is giving!! only thing is they run a lil smaller than expected ngl. def ordering again tho fr',
                productName: 'Bubble Bath press ons | Handmade Press On Nails',
                avatar: 'https://i.pravatar.cc/150?img=1'
              },
              {
                name: 'Sophia Stewart',
                rating: 5,
                text: "literally needed these for my brother's wedding and she came through!! left a note and she shipped them asap. no bc I'm obsessed!!",
                productName: 'Handmade Press On Nails: Reusable, Glue Ons',
                avatar: 'https://i.pravatar.cc/150?img=5'
              },
              {
                name: 'Caitlyn',
                rating: 5,
                text: 'these are exactly like the pics!! ate and left no crumbs fr. ordering again asap!! also they threw in nail tools + the glue tabs?? iconic',
                productName: 'Hand Painted Cat Eye French Press On Nails',
                avatar: 'https://i.pravatar.cc/150?img=9'
              },
              {
                name: 'Sarah M',
                rating: 5,
                text: 'obsessed!! the quality is insane and they fit perfectly. 10/10 no notes. everyone needs to get these rn',
                productName: 'Celestial Milky White Gold Star Nails',
                avatar: 'https://i.pravatar.cc/150?img=10'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-foreground/20 rounded-xl p-4 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground truncate">{review.name}</div>
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-3 h-3 ${i < review.rating ? 'text-foreground' : 'text-foreground/20'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  {review.text}
                </p>
                <div className="flex items-start gap-2 pt-2 border-t border-foreground/10">
                  <div className="w-8 h-8 rounded bg-muted flex-shrink-0" />
                  <p className="text-xs text-foreground/60 line-clamp-2">{review.productName}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80)' }}>
        {/* Sparkle decorations floating in CTA */}
        <svg className="absolute top-10 left-[10%] w-10 h-10 animate-float opacity-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-white" />
        </svg>
        <svg className="absolute top-20 right-[15%] w-8 h-8 animate-float opacity-50" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '0.7s' }}>
          <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-white" />
        </svg>
        <svg className="absolute bottom-10 left-[20%] w-12 h-12 animate-float opacity-30" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '1.2s' }}>
          <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-white" />
        </svg>
        <svg className="absolute bottom-16 right-[25%] w-10 h-10 animate-float opacity-40" viewBox="0 0 24 24" fill="currentColor" style={{ animationDelay: '0.4s' }}>
          <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-white" />
        </svg>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 font-['Space_Grotesk']">
              Let's Create Something Beautiful
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to get your custom set? Let's chat about your vision
            </p>
            <a href="sms:+15033322386" className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/95 backdrop-blur-sm text-foreground px-10 py-5 rounded-full text-lg font-semibold shadow-2xl hover:shadow-xl hover:bg-white transition-all flex items-center gap-3 border-2 border-white/50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Message Me
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
