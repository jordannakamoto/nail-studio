'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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
      <section className="relative pt-20 pb-12 md:pt-32 md:pb-16 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
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
            Handcrafted press-ons in Rohnert Park
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

      {/* Personal Note Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1754799670410-b282791342c3?w=800&q=80)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>

            {/* Letter Side */}
            <div className="order-1 md:order-2">
              <div className="glass rounded-3xl p-8 md:p-10 relative">
                <div className="absolute top-6 right-6 text-4xl opacity-20">💅</div>
                {/* Sparkle trim decorations */}
                <svg className="absolute top-4 left-4 w-6 h-6 opacity-40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-blue-300" />
                </svg>
                <svg className="absolute bottom-4 right-4 w-6 h-6 opacity-40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0l1.545 6.455L20 8l-6.455 1.545L12 16l-1.545-6.455L4 8l6.455-1.545L12 0z" className="text-pink-200" />
                </svg>

                <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text font-['Space_Grotesk']">
                  A Note From Me
                </h2>

                <div className="space-y-4 text-foreground/80 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  <p className="text-lg">
                    Hey there! 👋
                  </p>

                  <p>
                    What started as painting nails for friends in my Rohnert Park apartment has become my passion project. Every set I create is handmade—no mass production here.
                  </p>

                  <p>
                    Whether you choose a ready-made set or we design something custom together, you're getting something truly one-of-a-kind. Local pickup available or I'll ship anywhere in the US!
                  </p>

                  <p className="italic pt-4 border-t border-foreground/10">
                    Can't wait to create something beautiful for you!
                  </p>

                  <p className="text-2xl gradient-text font-['Space_Grotesk'] pt-2">
                    xoxo, Hayley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 gradient-text font-['Space_Grotesk']">
              what people are saying
            </h2>
            <p className="text-foreground/60">no cap fr fr 💅</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'sarah',
                handle: '@sarahhhhh',
                text: 'omg these nails are literally everything 😭 got so many compliments at the function last night',
                verified: false
              },
              {
                name: 'mia ✨',
                handle: '@miavibes',
                text: 'hayley is literally so talented??? the detail work is insane and they lasted 3 weeks no chip',
                verified: true
              },
              {
                name: 'jess',
                handle: '@jessthebest',
                text: 'not me ordering another set before i even took the first one off 💀 they\'re that good',
                verified: false
              },
              {
                name: 'emma 🦋',
                handle: '@emmaxo',
                text: 'been buying press ons for years and these are by far the best quality. worth every penny tbh',
                verified: true
              },
              {
                name: 'lily',
                handle: '@lilypad',
                text: 'the custom design process was so fun!! hayley really understood the vision and executed perfectly',
                verified: false
              },
              {
                name: 'ava',
                handle: '@avaaa',
                text: 'literally so obsessed. everyone keeps asking where i got them done and i\'m gatekeeping 🤭',
                verified: false
              }
            ].map((review, index) => (
              <motion.div
                key={review.handle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-foreground/10 rounded-2xl p-5 hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-sm truncate">{review.name}</span>
                      {review.verified && (
                        <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-foreground/50">{review.handle}</span>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg text-white relative overflow-hidden">
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
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-shadow flex items-center gap-2"
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
