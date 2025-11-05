'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Hi, I'm Hayley
          </h1>
          <p className="text-xl text-foreground/70">
            I make handmade press-on nails in Rohnert Park
          </p>
        </motion.div>

        {/* Simple Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="space-y-6 text-lg text-foreground/80" style={{ fontFamily: 'Georgia, serif' }}>
            <p>
              What started as painting nails for friends has become my passion. Every set is handmade—no mass production here.
            </p>

            <p>
              I offer local pickup in Rohnert Park or I'll ship anywhere in the US. Want something custom? Let's design it together!
            </p>

            <p className="text-foreground/60 text-base pt-4 border-t border-foreground/10">
              Payment: Venmo or Zelle • Turnaround: 3-5 days • Local pickup available
            </p>
          </div>
        </motion.div>

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link href="/bookings">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl animate-glow-blue"
            >
              Book a Session
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
