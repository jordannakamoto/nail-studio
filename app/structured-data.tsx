export default function StructuredData() {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NailStudio",
    "description": "Handmade press-on nails and custom nail art in Rohnert Park, serving Santa Rosa and Petaluma",
    "url": "https://your-domain.com",
    "telephone": "+1-555-123-4567",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rohnert Park",
      "addressLocality": "Rohnert Park",
      "addressRegion": "CA",
      "postalCode": "94928",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 38.3396,
      "longitude": -122.7011
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Rohnert Park",
        "sameAs": "https://en.wikipedia.org/wiki/Rohnert_Park,_California"
      },
      {
        "@type": "City",
        "name": "Santa Rosa",
        "sameAs": "https://en.wikipedia.org/wiki/Santa_Rosa,_California"
      },
      {
        "@type": "City",
        "name": "Petaluma",
        "sameAs": "https://en.wikipedia.org/wiki/Petaluma,_California"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "11:00",
        "closes": "20:00"
      }
    ],
    "paymentAccepted": ["Venmo", "Zelle", "Cash"],
    "image": "https://images.unsplash.com/photo-1754799670410-b282791342c3?w=1200&q=80",
    "sameAs": [
      "https://www.instagram.com/your-instagram",
      "https://www.tiktok.com/@your-tiktok"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
    />
  )
}
