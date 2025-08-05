import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sobat Bermain Tour & Travel - Paket Wisata Terbaik Indonesia & Dunia",
  description: "Sobat Bermain Tour & Travel menyediakan paket wisata terbaik untuk destinasi domestik dan internasional. Dengan pengalaman 10+ tahun, kami siap mewujudkan liburan impian Anda dengan harga terjangkau dan pelayanan terbaik.",
  keywords: [
    "tour travel Indonesia",
    "paket wisata",
    "tiket pesawat",
    "hotel booking",
    "wisata Bali",
    "wisata Yogyakarta",
    "tour Thailand",
    "travel agent",
    "liburan murah",
    "sobat bermain travel"
  ],
  authors: [{ name: "Sobat Bermain Tour & Travel" }],
  creator: "Sobat Bermain Tour & Travel",
  publisher: "Sobat Bermain Tour & Travel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sobatbermain.travel"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sobatbermain.travel",
    title: "Sobat Bermain Tour & Travel - Paket Wisata Terbaik",
    description: "Jelajahi destinasi menakjubkan Indonesia dan dunia dengan paket wisata terbaik. Ciptakan kenangan indah yang tak terlupakan bersama Sobat Bermain Tour & Travel.",
    siteName: "Sobat Bermain Tour & Travel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Sobat Bermain Tour & Travel - Beautiful tropical destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobat Bermain Tour & Travel - Paket Wisata Terbaik",
    description: "Jelajahi destinasi menakjubkan Indonesia dan dunia dengan paket wisata terbaik dari Sobat Bermain Tour & Travel.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Structured Data for Travel Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "Sobat Bermain Tour & Travel",
              "description": "Agen perjalanan wisata terpercaya dengan pengalaman 10+ tahun melayani paket wisata domestik dan internasional",
              "url": "https://sobatbermain.travel",
              "logo": "https://sobatbermain.travel/logo.png",
              "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop&crop=center",
              "telephone": "+62-812-3456-7890",
              "email": "info@sobatbermain.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Malioboro No. 123",
                "addressLocality": "Yogyakarta",
                "postalCode": "55213",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "-7.7956",
                "longitude": "110.3695"
              },
              "openingHours": [
                "Mo-Fr 08:00-20:00",
                "Sa-Su 09:00-18:00"
              ],
              "priceRange": "$$",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Indonesia"
                },
                {
                  "@type": "Country",
                  "name": "Thailand"
                },
                {
                  "@type": "Country",
                  "name": "Singapore"
                },
                {
                  "@type": "Country",
                  "name": "Malaysia"
                }
              ],
              "serviceType": [
                "Tour Packages",
                "Flight Booking",
                "Hotel Reservation",
                "Travel Insurance",
                "Transportation",
                "Tour Guide Services"
              ],
              "founder": {
                "@type": "Person",
                "name": "Sobat Bermain Travel Team"
              },
              "foundingDate": "2014",
              "slogan": "Sobat Terbaik dalam Perjalanan Anda"
            })
          }}
        />

        {/* Additional meta tags */}
        <meta name="theme-color" content="#15937C" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sobat Bermain Travel" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
