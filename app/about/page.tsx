'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text font-['Space_Grotesk']">
              About NailStudio
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Bringing salon-quality nails to your fingertips, one set at a time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Story</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                NailStudio was born from a passion for nail art and a desire to make
                professional-quality nails accessible to everyone. We believe that
                beautiful nails shouldn't require hours at the salon or break the bank.
              </p>
              <p>
                Each of our press-on nail sets is carefully crafted with attention to
                detail, using premium materials that last. From bold statement pieces
                to subtle everyday elegance, we've got a design for every mood and
                occasion.
              </p>
              <p>
                Looking for something truly unique? Book a custom design consultation
                and work one-on-one with our nail artists to create the perfect set
                that expresses your personal style.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '✨',
                title: 'Quality First',
                description: 'Premium materials and craftsmanship in every set',
              },
              {
                icon: '🌱',
                title: 'Sustainable Beauty',
                description: 'Eco-friendly packaging and reusable nail sets',
              },
              {
                icon: '💖',
                title: 'Self-Expression',
                description: 'Empowering you to express your unique style',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-3xl p-8 text-center hover:shadow-2xl transition-all"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-8 gradient-text">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Easy Application',
                  description: 'Apply in minutes with our simple adhesive tabs or nail glue',
                },
                {
                  title: 'Long-Lasting',
                  description: 'Durable sets that last up to 2 weeks with proper care',
                },
                {
                  title: 'Reusable',
                  description: 'Remove and reapply multiple times for maximum value',
                },
                {
                  title: 'Custom Sizes',
                  description: 'Each set includes multiple sizes for the perfect fit',
                },
                {
                  title: 'Fast Shipping',
                  description: 'Free shipping on orders over $30',
                },
                {
                  title: 'Easy Payments',
                  description: 'Pay conveniently via Venmo or Zelle',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text font-['Space_Grotesk']">
              Ready to Elevate Your Nail Game?
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Browse our collection or book a custom design consultation today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl w-full sm:w-auto"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/bookings">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary/30 hover:border-primary/60 transition-colors w-full sm:w-auto"
                >
                  Book Appointment
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
