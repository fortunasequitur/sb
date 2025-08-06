"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Malang & Batu",
    location: "Malang & Batu, Jawa Timur",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop&crop=center",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    price: "Mulai dari Rp. 250.000",
    originalPrice: "",
    description: "Wisata alam, kuliner, wahana, dan udara sejuk di Malang & Batu."
  },
  {
    id: 2,
    name: "Bromo",
    location: "Bromo, Jawa Timur",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop&crop=center",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    price: "Mulai dari Rp. 250.000",
    originalPrice: "",
    description: "Nikmati sunrise dan keindahan alam Gunung Bromo yang menakjubkan."
  },
  {
    id: 3,
    name: "Yogyakarta",
    location: "Yogyakarta, Indonesia",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop&crop=center",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    price: "Mulai dari Rp. 250.000",
    originalPrice: "",
    description: "Kota budaya, sejarah, dan wisata kuliner khas Jawa."
  },
  {
    id: 4,
    name: "Bali",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop&crop=center",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    price: "Mulai dari Rp. 250.000",
    originalPrice: "",
    description: "Pulau Dewata dengan pantai indah dan budaya unik."
  }
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#E3F2ED] rounded-full text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Destinasi Populer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Destinasi
            <br />
            <span className="text-gradient">Paling Populer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut Destinasi Paling Populer Pilihan Kami
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {destinations.map((destination, index) => (
            <Card
              key={destination.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Discount Badge */}
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  {destination.discount}
                </Badge>
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm flex items-center">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {destination.rating}
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination.location}
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {destination.name}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-lg font-bold text-primary">{destination.price}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                  Lihat Detail
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8">
            Lihat Semua Destinasi
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
