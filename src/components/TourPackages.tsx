"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Calendar, Camera, Utensils, Bed } from "lucide-react"
import Image from "next/image"

const packages = [
  {
    id: 1,
    name: "Bromo Private Trip",
    location: "Bromo, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 350.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    reviews: 1.254,
    groupSize: "1-12 Orang",
    highlights: [
      "Sunrise di Penanjakan",
      "Kawah Bromo",
      "Pasir Berbisik",
      "Bukit Teletubbies"
    ],
    includes: ["Jeep Private", "Tiket Masuk", "Snack & Air Mineral", "Tour Guide"],
    popular: true
  },
  {
    id: 2,
    name: "Bromo Open Trip",
    location: "Bromo, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 300.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.9,
    reviews: 1.805,
    groupSize: "1-10 Orang",
    highlights: [
      "Sunrise di Penanjakan",
      "Kawah Bromo",
      "Pasir Berbisik",
      "Bukit Teletubbies"
    ],
    includes: ["Jeep Sharing", "Tiket Masuk", "Snack & Air Mineral", "Tour Leader"],
    popular: false
  },
  {
    id: 3,
    name: "City Tour Malang - Batu",
    location: "Malang & Batu, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 250.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.7,
    reviews: 656,
    groupSize: "2-10 Orang",
    highlights: [
      "Jatim Park / Museum Angkut",
      "Alun-Alun Batu",
      "Petik Apel",
      "Wisata Kuliner Malang"
    ],
    includes: ["Transportasi", "Tiket Masuk", "Makan Siang", "Tour Guide"],
    popular: false
  },
  {
    id: 4,
    name: "Paket Employee Gathering",
    location: "Malang & Batu, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 350.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.8,
    reviews: 128,
    groupSize: "20-100 Orang",
    highlights: [],
    includes: [],
    popular: false
  },
  {
    id: 5,
    name: "Paket Family Gathering",
    location: "Malang & Batu, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 300.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.8,
    reviews: 176,
    groupSize: "10-50 Orang",
    highlights: [],
    includes: [],
    popular: false
  },
  {
    id: 6,
    name: "Pantai Malang Selatan",
    location: "Malang Selatan, Jawa Timur",
    duration: "1 Hari",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=300&fit=crop&crop=center",
    price: "Rp. 250.000",
    originalPrice: "",
    discount: "10+ Paket Wisata",
    rating: 4.7,
    reviews: 699,
    groupSize: "2-15 Orang",
    highlights: [],
    includes: [],
    popular: false
  }
]

export function TourPackages() {
  return (
    <section id="packages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Paket Wisata Populer
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Paket Wisata
            <br />
            <span className="text-gradient">Paling Populer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut Paket Wisata Paling Diminati
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up ${
                pkg.popular ? 'ring-2 ring-primary' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  ⭐ Paling Populer
                </div>
              )}

              <div className="relative overflow-hidden h-48">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
                  {pkg.discount} OFF
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {pkg.location}
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground ml-1">({pkg.reviews})</span>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {pkg.name}
                </CardTitle>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {pkg.groupSize}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <div className="text-xs text-muted-foreground">per orang</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    Pesan Sekarang
                  </Button>
                  <Button variant="outline" className="w-full">
                    Lihat Detail
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Tidak Menemukan Paket yang Cocok?
            </h3>
            <p className="text-muted-foreground mb-6">
              Kami siap membantu Anda membuat paket wisata custom sesuai keinginan dan budget Anda
            </p>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
