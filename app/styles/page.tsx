'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Styles() {
  const portfolioItems = [
    {
      name: 'Sunset Glow',
      image: 'https://i.etsystatic.com/60597025/r/il/a74f32/7272373322/il_1588xN.7272373322_qsv9.jpg',
      description: 'Gradient ombre with shimmer',
    },
    {
      name: 'Velvet Dreams',
      image: 'https://i.etsystatic.com/46727789/r/il/970bec/7046808740/il_1588xN.7046808740_9a17.jpg',
      description: 'Matte burgundy elegance',
    },
    {
      name: 'Midnight Sparkle',
      image: 'https://i.etsystatic.com/60597025/r/il/99fe57/7340321305/il_1588xN.7340321305_22lq.jpg',
      description: 'Black glitter fade',
    },
    {
      name: 'Rose Gold Elegance',
      image: 'https://i.etsystatic.com/58065192/r/il/09592f/6899666633/il_1588xN.6899666633_ot4h.jpg',
      description: 'Metallic rose shimmer',
    },
    {
      name: 'Ocean Breeze',
      image: 'https://i.etsystatic.com/55730575/r/il/c01026/6545430953/il_1588xN.6545430953_qr1k.jpg',
      description: 'Turquoise marble effect',
    },
    {
      name: 'Cherry Blossom',
      image: 'https://i.etsystatic.com/59484680/r/il/a1f578/7329622563/il_1588xN.7329622563_4koc.jpg',
      description: 'Soft pink florals',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-4 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors mb-3">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text font-['Space_Grotesk']">
            Styles
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl">
            browse my favorite custom sets and get inspired for your next look
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden mb-3 shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden relative">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Product Info */}
                <div className="px-1">
                  <h3 className="text-base md:text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
