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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1364&q=80)',
              filter: 'blur(8px)',
              transform: 'scale(1.1)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
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
            className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-xl mx-auto"
          >
            Small batch, handcrafted press-ons and custom nail art.
            Serving Rohnert Park, Santa Rosa, and Petaluma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl animate-glow w-full sm:w-auto"
              >
                Browse Sets
              </motion.button>
            </Link>
            <Link href="/bookings">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/30 hover:border-primary/60 transition-colors w-full sm:w-auto"
              >
                Book a Session
              </motion.button>
            </Link>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-foreground/60"
          >
            <div>Each set handmade to order</div>
            <div>•</div>
            <div>Local pickup available</div>
            <div>•</div>
            <div>Custom designs welcome</div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-foreground/40"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
              Current Sets
            </h2>
            <p className="text-lg text-foreground/70">
              Ready-to-ship designs made this week
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Sunset Glow',
                price: '$24.99',
                image: 'https://images.unsplash.com/photo-1610992015762-45b1f5dd2a5a?w=400&q=80',
                alt: 'Gradient orange and pink press-on nails'
              },
              {
                name: 'Velvet Dreams',
                price: '$22.99',
                image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80',
                alt: 'Burgundy matte press-on nails'
              },
              {
                name: 'Midnight Sparkle',
                price: '$26.99',
                image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=400&q=80',
                alt: 'Black glitter press-on nails'
              },
            ].map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-6 hover:shadow-2xl transition-all cursor-pointer group"
              >
                <div className="aspect-square rounded-2xl mb-4 overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-primary text-lg font-bold">{product.price}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
              >
                See All Sets →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Personal Note Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1754799670410-b282791342c3?w=800&q=80)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>

            {/* Letter Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="glass rounded-3xl p-8 md:p-10 relative">
                <div className="absolute top-6 right-6 text-4xl opacity-20">💅</div>

                <h2 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text font-['Space_Grotesk']">
                  A Note From Me
                </h2>

                <div className="space-y-4 text-foreground/80 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  <p className="text-lg">
                    Hey there! 👋
                  </p>

                  <p>
                    I'm so glad you found my little corner of the internet. What started as
                    painting nails for friends in my Rohnert Park apartment has become my
                    passion project and small business.
                  </p>

                  <p>
                    Every set I create is made by hand—no mass production here. I carefully
                    hand-paint each nail, shape them perfectly, and package them with care.
                    Whether you choose one of my ready-made sets or we design something
                    custom together, you're getting something truly one-of-a-kind.
                  </p>

                  <p>
                    I offer local pickup here in Rohnert Park (we can meet for coffee!) or
                    I'll ship anywhere in the US. Payment is easy via Venmo or Zelle, and
                    I'm always happy to chat about custom designs.
                  </p>

                  <p className="italic pt-4 border-t border-foreground/10">
                    Can't wait to create something beautiful for you!
                  </p>

                  <p className="text-2xl gradient-text font-['Space_Grotesk'] pt-2">
                    xoxo, Hayley
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center">
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
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-shadow"
              >
                Browse Sets
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
