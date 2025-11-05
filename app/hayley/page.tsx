'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { format } from 'date-fns'

interface Booking {
  id: string
  service_id: string
  booking_date: string
  booking_time: string
  customer_name: string
  customer_email: string
  customer_phone: string
  notes: string
  status: string
  payment_status: string
  created_at: string
  services?: {
    name: string
    price: number
    duration_minutes: number
  }
}

export default function AdminPage() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed' | 'cancelled'>('all')

  const supabase = createClient()

  useEffect(() => {
    fetchBookings()
  }, [filter])

  async function fetchBookings() {
    try {
      setLoading(true)
      let query = supabase
        .from('bookings')
        .select(`
          *,
          services (
            name,
            price,
            duration_minutes
          )
        `)
        .order('booking_date', { ascending: true })
        .order('booking_time', { ascending: true })

      if (filter !== 'all') {
        query = query.eq('status', filter)
      }

      const { data, error } = await query

      if (error) {
        console.warn('Supabase not configured, showing empty bookings list')
        setBookings([])
        setLoading(false)
        return
      }
      setBookings(data || [])
    } catch (error) {
      console.warn('Error fetching bookings (Supabase not configured):', error)
      setBookings([])
    } finally {
      setLoading(false)
    }
  }

  async function updateBookingStatus(bookingId: string, newStatus: string) {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status: newStatus })
        .eq('id', bookingId)

      if (error) throw error
      fetchBookings() // Refresh list
    } catch (error) {
      console.error('Error updating booking:', error)
      alert('Failed to update booking status')
    }
  }

  async function updatePaymentStatus(bookingId: string, newStatus: string) {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ payment_status: newStatus })
        .eq('id', bookingId)

      if (error) throw error
      fetchBookings() // Refresh list
    } catch (error) {
      console.error('Error updating payment:', error)
      alert('Failed to update payment status')
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-300'
      case 'completed': return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-300'
      default: return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    }
  }

  const getPaymentColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800'
      case 'refunded': return 'bg-red-100 text-red-800'
      default: return 'bg-yellow-100 text-yellow-800'
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text font-['Space_Grotesk'] mb-2">
            Bookings Dashboard
          </h1>
          <p className="text-foreground/70">Manage your appointments</p>
        </div>

        {/* Filters */}
        <div className="glass rounded-2xl p-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as any)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  filter === status
                    ? 'gradient-bg text-white'
                    : 'glass hover:border-primary/50'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Bookings List */}
        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-2xl p-6 animate-pulse">
                <div className="h-6 bg-muted rounded mb-3" />
                <div className="h-4 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : bookings.length === 0 ? (
          <div className="glass rounded-2xl p-12 text-center">
            <p className="text-xl text-foreground/60">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <div key={booking.id} className="glass rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Left: Customer Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{booking.customer_name}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-foreground/70">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${booking.customer_email}`} className="hover:text-primary">
                          {booking.customer_email}
                        </a>
                      </div>
                      {booking.customer_phone && (
                        <div className="flex items-center gap-2 text-foreground/70">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${booking.customer_phone}`} className="hover:text-primary">
                            {booking.customer_phone}
                          </a>
                        </div>
                      )}
                    </div>
                    {booking.notes && (
                      <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                        <p className="font-semibold mb-1">Notes:</p>
                        <p className="text-foreground/70">{booking.notes}</p>
                      </div>
                    )}
                  </div>

                  {/* Middle: Booking Details */}
                  <div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-primary mb-1">
                        {booking.services?.name || 'Service'}
                      </h4>
                      <p className="text-sm text-foreground/70">
                        ${booking.services?.price} • {booking.services?.duration_minutes} min
                      </p>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold">
                          {format(new Date(booking.booking_date), 'EEEE, MMMM d, yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-foreground/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-semibold">{booking.booking_time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Status & Actions */}
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Booking Status</label>
                      <select
                        value={booking.status}
                        onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg border-2 text-sm font-semibold ${getStatusColor(booking.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Payment</label>
                      <select
                        value={booking.payment_status}
                        onChange={(e) => updatePaymentStatus(booking.id, e.target.value)}
                        className={`w-full px-3 py-2 rounded-lg text-sm font-semibold ${getPaymentColor(booking.payment_status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="paid">Paid</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </div>
                    <p className="text-xs text-foreground/50 mt-3">
                      Booked {format(new Date(booking.created_at), 'MMM d, h:mm a')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
