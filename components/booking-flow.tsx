'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'

interface Service {
  id: string
  name: string
  description: string | null
  price: number
  duration_minutes: number
}

export default function BookingFlow() {
  const [step, setStep] = useState(0)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  })
  const [inspirationImages, setInspirationImages] = useState<string[]>([])
  const [imageInputValue, setImageInputValue] = useState('')
  const [services, setServices] = useState<Service[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date())
  const dateInputRef = useState<HTMLInputElement | null>(null)

  // Fetch services on mount
  useState(() => {
    const supabase = createClient()
    supabase
      .from('services')
      .select('*')
      .eq('is_active', true)
      .then(({ data, error }) => {
        if (error) {
          // Fallback services if Supabase not configured
          setServices([
            { id: '1', name: 'Custom Design', description: 'Full custom nail design', price: 45, duration_minutes: 60 },
            { id: '2', name: 'Ready-Made Set', description: 'Choose from our collection', price: 35, duration_minutes: 30 },
            { id: '3', name: 'Repair & Reapply', description: 'Fix or reapply existing set', price: 25, duration_minutes: 30 }
          ])
        } else if (data) {
          setServices(data)
        }
      })
  })

  const handlePhoneChange = (value: string) => {
    const cleaned = value.replace(/\D/g, '')
    const formatted = cleaned.length >= 10
      ? `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
      : value
    setFormData({ ...formData, phone: formatted })
  }

  const handleImagePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = e.clipboardData.getData('text')
    if (pastedText && (pastedText.startsWith('http://') || pastedText.startsWith('https://'))) {
      e.preventDefault()
      setInspirationImages([...inspirationImages, pastedText])
      setImageInputValue('')
    }
  }

  const handleImageInputChange = (value: string) => {
    setImageInputValue(value)
    // Auto-detect when a URL is completed
    if (value && (value.match(/\.(jpg|jpeg|png|gif|webp)$/i) || value.match(/instagram\.com|pinterest\.com/))) {
      setInspirationImages([...inspirationImages, value])
      setImageInputValue('')
    }
  }

  const removeImage = (index: number) => {
    setInspirationImages(inspirationImages.filter((_, i) => i !== index))
  }

  // Get week days starting from Monday
  const getWeekDays = () => {
    const days = []
    const start = new Date(currentWeekStart)
    start.setHours(0, 0, 0, 0)

    // Adjust to Monday if not already
    const dayOfWeek = start.getDay()
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek // 0 is Sunday
    start.setDate(start.getDate() + diff)

    for (let i = 0; i < 7; i++) {
      const day = new Date(start)
      day.setDate(start.getDate() + i)
      days.push(day)
    }
    return days
  }

  const openMonthPicker = () => {
    dateInputRef[0]?.showPicker?.()
  }

  const goToPreviousWeek = () => {
    const newStart = new Date(currentWeekStart)
    newStart.setDate(newStart.getDate() - 7)
    setCurrentWeekStart(newStart)
  }

  const goToNextWeek = () => {
    const newStart = new Date(currentWeekStart)
    newStart.setDate(newStart.getDate() + 7)
    setCurrentWeekStart(newStart)
  }

  const formatDateForDisplay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  const formatDateForValue = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    const supabase = createClient()

    const { error } = await supabase.from('bookings').insert({
      service_id: selectedService?.id,
      booking_date: selectedDate,
      booking_time: selectedTime,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      notes: formData.notes,
      inspiration_images: inspirationImages.join(','),
      status: 'pending'
    })

    setIsSubmitting(false)

    if (!error) {
      setStep(3) // Move to thank you step
    }
  }

  const steps = [
    {
      title: "pick a date & time",
      subtitle: "here's my availability",
      content: (
        <div className="space-y-6">
          {/* Hidden date input for month picker */}
          <input
            ref={(el) => dateInputRef[1](el)}
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="hidden"
          />

          {/* Weekly View */}
          <div>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={goToPreviousWeek}
                  className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-medium text-foreground">
                    {currentWeekStart.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                  <button
                    onClick={openMonthPicker}
                    className="text-xs text-primary hover:underline"
                  >
                    View full month →
                  </button>
                </div>
                <button
                  onClick={goToNextWeek}
                  className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {getWeekDays().map((day) => {
                  const dateValue = formatDateForValue(day)
                  const isSelected = selectedDate === dateValue
                  const isPast = day < new Date(new Date().setHours(0, 0, 0, 0))

                  return (
                    <button
                      key={dateValue}
                      onClick={() => !isPast && setSelectedDate(dateValue)}
                      disabled={isPast}
                      className={`p-3 rounded-xl border-2 transition-all text-center ${
                        isSelected
                          ? 'border-primary bg-primary text-white'
                          : isPast
                          ? 'border-foreground/5 bg-foreground/5 text-foreground/30 cursor-not-allowed'
                          : 'border-foreground/10 hover:border-primary/30 bg-white text-gray-900'
                      }`}
                    >
                      <div className="text-xs font-medium mb-1">
                        {day.toLocaleDateString('en-US', { weekday: 'short' })}
                      </div>
                      <div className="text-lg font-bold">
                        {day.getDate()}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

          {/* Time Slots */}
          <div>
            <label className="block text-sm font-medium mb-3 text-foreground">Select Time</label>
            <div className="grid grid-cols-4 gap-2">
              {['10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm'].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  disabled={!selectedDate}
                  className={`p-3 rounded-xl border-2 transition-all text-sm font-medium ${
                    selectedTime === time
                      ? 'border-primary bg-primary text-white'
                      : !selectedDate
                      ? 'border-foreground/5 bg-foreground/5 text-foreground/30 cursor-not-allowed'
                      : 'border-foreground/10 hover:border-primary/30 bg-white text-gray-900'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setStep(1)}
            disabled={!selectedDate || !selectedTime}
            className="w-full gradient-bg text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            next step →
          </button>
        </div>
      )
    },
    {
      title: "choose your service",
      subtitle: "",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`w-full text-left p-5 rounded-2xl border-2 transition-all ${
                  selectedService?.id === service.id
                    ? 'border-primary bg-primary/5'
                    : 'border-foreground/10 hover:border-primary/30 bg-white'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-foreground">{service.name}</h3>
                  <span className="text-primary font-bold">${service.price}</span>
                </div>
                {service.description && (
                  <p className="text-sm text-foreground/60">{service.description}</p>
                )}
                <p className="text-xs text-foreground/50 mt-2">{service.duration_minutes} minutes</p>
              </button>
            ))}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={!selectedService}
            className="w-full gradient-bg text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            next step →
          </button>
        </div>
      )
    },
    {
      title: "your info",
      subtitle: "",
      content: (
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full bg-white border-2 border-foreground/10 px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary transition-all text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1.5 text-foreground">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-white border-2 border-foreground/10 px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary transition-all text-foreground"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5 text-foreground">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                placeholder="(555) 123-4567"
                className="w-full bg-white border-2 border-foreground/10 px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary transition-all text-foreground"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Special Requests (Optional)</label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any design ideas or preferences?"
              rows={2}
              className="w-full bg-white border-2 border-foreground/10 px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary transition-all text-foreground resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1.5 text-foreground">Design Inspiration (Optional)</label>
            <input
              type="text"
              value={imageInputValue}
              onChange={(e) => handleImageInputChange(e.target.value)}
              onPaste={handleImagePaste}
              placeholder="Paste image URLs from Instagram, Pinterest, or anywhere"
              className="w-full bg-white border-2 border-foreground/10 px-4 py-2.5 rounded-xl focus:outline-none focus:border-primary transition-all text-foreground"
            />
            <p className="text-xs text-foreground/50 mt-1.5">paste a link and it'll automatically be added to your inspiration board below</p>

            {/* Image Previews */}
            {inspirationImages.length > 0 && (
              <div className="mt-3 space-y-2">
                {inspirationImages.map((url, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-muted rounded-lg group">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-foreground/5 flex-shrink-0">
                      <img
                        src={url}
                        alt={`Inspiration ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = 'none'
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs text-foreground/40">Preview unavailable</div>'
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-foreground/60 truncate">{url}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="p-1.5 hover:bg-foreground/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || isSubmitting}
            className="w-full bg-foreground text-background px-8 py-3.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Booking...' : 'Confirm Booking'}
          </button>
        </div>
      )
    },
    {
      title: "you're all set! ✨",
      subtitle: "can't wait to create something gorgeous with you",
      content: (
        <div className="text-center space-y-6">
          <div className="text-6xl mb-4">💅</div>
          <p className="text-lg text-foreground/80" style={{ fontFamily: 'Georgia, serif' }}>
            thank you for booking! i'll reach out soon to confirm and chat about your design ideas 💕
          </p>

          <div className="bg-muted rounded-2xl p-6 space-y-3 text-left">
            <h3 className="font-semibold text-foreground mb-3">Your Booking Summary:</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <p><span className="font-medium">Service:</span> {selectedService?.name}</p>
              <p><span className="font-medium">Date:</span> {selectedDate}</p>
              <p><span className="font-medium">Time:</span> {selectedTime}</p>
              <p><span className="font-medium">Price:</span> ${selectedService?.price}</p>
            </div>
          </div>

          <div className="pt-6 space-y-3">
            <p className="text-sm text-foreground/60">got questions? hmu!</p>
            <a
              href="mailto:hayley@hcnails.com"
              className="inline-block gradient-bg text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              message me
            </a>
          </div>
        </div>
      )
    }
  ]

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Small Photo Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[3/4]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1754799670410-b282791342c3?w=800&q=80)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium mb-1">Handcrafted with love</p>
                  <p className="text-2xl font-bold gradient-text" style={{ WebkitTextFillColor: 'white' }}>
                    xoxo, Hayley
                  </p>
                </div>
              </div>

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                >
                  <h3 className="font-semibold text-foreground mb-3">Your Booking:</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p><span className="font-medium">Service:</span> {selectedService?.name}</p>
                    <p><span className="font-medium">Date:</span> {selectedDate}</p>
                    <p><span className="font-medium">Time:</span> {selectedTime}</p>
                    <p><span className="font-medium">Price:</span> ${selectedService?.price}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Main Booking Content */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl relative">
              {/* Back button - top left */}
              {step > 0 && step < 3 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="absolute top-4 left-4 text-sm text-foreground/60 hover:text-primary transition-colors flex items-center gap-1"
                >
                  ← Back
                </button>
              )}

              {/* Progress indicator */}
              {step < 3 && (
                <div className="flex items-center justify-center gap-3 mb-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                        i === step
                          ? 'bg-primary text-white'
                          : i < step
                          ? 'bg-primary/20 text-primary'
                          : 'bg-foreground/10 text-foreground/40'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.15 }}
                  className="min-h-[500px]"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground font-['Space_Grotesk']" style={{ marginBottom: steps[step].subtitle ? '0.5rem' : '1.5rem' }}>
                    {steps[step].title}
                  </h3>
                  {steps[step].subtitle && (
                    <p className="text-sm text-foreground/60 mb-6">{steps[step].subtitle}</p>
                  )}

                  {steps[step].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
