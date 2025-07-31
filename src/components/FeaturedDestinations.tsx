"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, ArrowRight } from "lucide-react"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "Bali Paradise",
    location: "Bali, Indonesia",
    image: "https://images.unsplash.com/photo-1555400175-e2166d4d3738?w=600&h=400&fit=crop&crop=center",
    discount: "30%",
    rating: 4.8,
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    description: "Nikmati keindahan pantai eksotis dan budaya yang kaya"
  },
  {
    id: 2,
    name: "Thailand Adventure",
    location: "Phuket, Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop&crop=center",
    discount: "25%",
    rating: 4.9,
    price: "Rp 4.200.000",
    originalPrice: "Rp 5.600.000",
    description: "Jelajahi keajaiban alam dan pantai kristal Thailand"
  },
  {
    id: 3,
    name: "Raja Ampat Explorer",
    location: "Papua Barat, Indonesia",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop&crop=center",
    discount: "20%",
    rating: 4.7,
    price: "Rp 6.800.000",
    originalPrice: "Rp 8.500.000",
    description: "Surga bawah laut dengan biodiversitas terkaya di dunia"
  },
  {
    id: 4,
    name: "Maldives Luxury",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop&crop=center",
    discount: "15%",
    rating: 5.0,
    price: "Rp 12.800.000",
    originalPrice: "Rp 15.000.000",
    description: "Pengalaman mewah di villa air dengan pemandangan spektakuler"
  }
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Destinasi Populer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Temukan Destinasi
            <br />
            <span className="text-gradient">Impian Anda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilihan destinasi terbaik dengan pemandangan menakjubkan dan pengalaman tak terlupakan
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
                  {destination.discount} OFF
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
                    <span className="text-sm text-muted-foreground line-through ml-2">{destination.originalPrice}</span>
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
