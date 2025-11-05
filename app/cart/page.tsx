'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useCartStore } from '@/lib/store/cart-store'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, getTotalItems } = useCartStore()
  const [showRemoved, setShowRemoved] = useState(false)

  const handleRemove = (productId: string, size: string) => {
    removeItem(productId, size)
    setShowRemoved(true)
    setTimeout(() => setShowRemoved(false), 2000)
  }

  const subtotal = getTotalPrice()
  const shipping = subtotal > 30 ? 0 : 5.99
  const total = subtotal + shipping

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text font-['Space_Grotesk'] mb-2">
            Your Cart
          </h1>
          <p className="text-foreground/70">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'}
          </p>
        </motion.div>

        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🛍️</div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-foreground/70 mb-8">
              Add some beautiful nails to your collection!
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-bg text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl"
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={`${item.product.id}-${item.size}`}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass rounded-2xl p-6"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Product Image */}
                      <div className="w-full sm:w-32 aspect-square rounded-xl flex-shrink-0 overflow-hidden relative">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{
                            backgroundImage: item.product.image_url
                              ? `url(${item.product.image_url})`
                              : 'url(https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&q=80)'
                          }}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-foreground/60 text-sm mb-2">
                          Size: {item.size}
                        </p>
                        <p className="text-primary font-bold text-lg">
                          ${item.product.price}
                        </p>
                      </div>

                      {/* Quantity & Remove */}
                      <div className="flex sm:flex-col justify-between sm:justify-start items-end sm:items-end gap-4">
                        <div className="flex items-center gap-2 glass px-3 py-2 rounded-full">
                          <button
                            onClick={() => {
                              if (item.quantity > 1) {
                                updateQuantity(item.product.id, item.size, item.quantity - 1)
                              }
                            }}
                            className="w-6 h-6 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.size, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center hover:text-primary transition-colors"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => handleRemove(item.product.id, item.size)}
                          className="text-foreground/50 hover:text-red-500 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-6 sticky top-24"
              >
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-green-500 font-semibold">FREE</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {subtotal < 30 && subtotal > 0 && (
                    <p className="text-sm text-accent">
                      Add ${(30 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                  <div className="border-t border-foreground/10 pt-3">
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span className="text-primary">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full gradient-bg text-white py-4 rounded-full text-lg font-semibold shadow-xl mb-4"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>

                <Link href="/shop">
                  <button className="w-full glass py-3 rounded-full font-medium hover:border-primary/50 transition-colors">
                    Continue Shopping
                  </button>
                </Link>

                <div className="mt-6 pt-6 border-t border-foreground/10 space-y-3 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Secure checkout</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free shipping on orders over $30</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>30-day return policy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Removed Notification */}
      <AnimatePresence>
        {showRemoved && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 glass-dark px-6 py-4 rounded-2xl shadow-2xl z-50"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🗑️</span>
              <span className="font-semibold">Removed from cart</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
