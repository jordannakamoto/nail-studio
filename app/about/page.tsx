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
              Hi, I'm [Your Name]
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Your local nail artist in Rohnert Park creating handmade press-on sets
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
            <h2 className="text-3xl font-bold mb-6 gradient-text">My Story</h2>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                What started as a hobby painting nails for friends in my Rohnert Park
                apartment has grown into a small business I'm so proud of. I create
                each set by hand with attention to every detail.
              </p>
              <p>
                I believe beautiful nails should be accessible, comfortable, and uniquely
                you. That's why every set is made to order using quality materials that
                actually last. Whether you want something bold or subtle, I'm here to
                bring your vision to life.
              </p>
              <p>
                Based in Rohnert Park and serving the Sonoma County area, I offer local
                pickup or shipping. Want something custom? Book a design session and we'll
                create your perfect set together over coffee (or FaceTime!).
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
            <h2 className="text-4xl font-bold mb-4 gradient-text">What I Believe In</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💅',
                title: 'Handmade Quality',
                description: 'Every set is hand-painted and assembled with care',
              },
              {
                icon: '🌱',
                title: 'Local & Sustainable',
                description: 'Small batch production with eco-friendly packaging',
              },
              {
                icon: '💖',
                title: 'Personal Touch',
                description: 'Working with you to create nails that feel uniquely yours',
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
            <h2 className="text-3xl font-bold mb-8 gradient-text">Working Together</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Local Pickup',
                  description: 'Meet me in Rohnert Park for same-day pickup (no shipping wait!)',
                },
                {
                  title: 'Custom Designs',
                  description: 'Book a design session to create something totally unique',
                },
                {
                  title: 'Perfect Fit',
                  description: 'Multiple sizes included, plus I can customize sizing',
                },
                {
                  title: 'Reusable Sets',
                  description: 'Remove and reapply multiple times with proper care',
                },
                {
                  title: 'Quick Turnaround',
                  description: 'Most sets ship within 3-5 days, customs within a week',
                },
                {
                  title: 'Easy Payment',
                  description: 'Pay via Venmo or Zelle (or cash for local pickup!)',
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
              Let's Work Together
            </h2>
            <p className="text-xl text-foreground/70 mb-8">
              Browse ready-made sets or book a session to design something custom
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
