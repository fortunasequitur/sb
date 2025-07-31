"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Users, Star, Calendar, Camera, Utensils, Bed } from "lucide-react"
import Image from "next/image"

const packages = [
  {
    id: 1,
    name: "Bali Cultural & Beach Escape",
    location: "Bali, Indonesia",
    duration: "5 Hari 4 Malam",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&h=300&fit=crop&crop=center",
    price: "Rp 3.200.000",
    originalPrice: "Rp 4.500.000",
    discount: "30%",
    rating: 4.8,
    reviews: 124,
    groupSize: "2-15 Orang",
    highlights: [
      "Sunset di Tanah Lot",
      "Rafting di Ayung River",
      "Tour Ubud & Tegallalang",
      "Pantai Kuta & Seminyak"
    ],
    includes: ["Akomodasi", "Transportasi", "Makan", "Tour Guide"],
    popular: true
  },
  {
    id: 2,
    name: "Thailand Island Hopping",
    location: "Phuket & Phi Phi Island",
    duration: "6 Hari 5 Malam",
    image: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=600&h=300&fit=crop&crop=center",
    price: "Rp 5.800.000",
    originalPrice: "Rp 7.200.000",
    discount: "20%",
    rating: 4.9,
    reviews: 89,
    groupSize: "4-12 Orang",
    highlights: [
      "Maya Bay Phi Phi",
      "James Bond Island",
      "Snorkeling & Diving",
      "Thai Cooking Class"
    ],
    includes: ["Hotel 4*", "Speed Boat", "All Meals", "Activities"],
    popular: false
  },
  {
    id: 3,
    name: "Yogyakarta Heritage Tour",
    location: "Yogyakarta, Indonesia",
    duration: "3 Hari 2 Malam",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=300&fit=crop&crop=center",
    price: "Rp 1.800.000",
    originalPrice: "Rp 2.400.000",
    discount: "25%",
    rating: 4.7,
    reviews: 156,
    groupSize: "1-20 Orang",
    highlights: [
      "Candi Borobudur",
      "Candi Prambanan",
      "Keraton Yogyakarta",
      "Malioboro Street"
    ],
    includes: ["Hotel", "AC Transport", "Breakfast", "Entrance Fees"],
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
            Paket Wisata Terbaik
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Paket Wisata
            <br />
            <span className="text-gradient">Menakjubkan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nikmati pengalaman tak terlupakan dengan paket wisata lengkap yang telah kami siapkan khusus untuk Anda
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
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Camera className="w-4 h-4 mr-2" />
                    Highlight
                  </h4>
                  <ul className="space-y-1">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-medium mb-2 flex items-center">
                    <Utensils className="w-4 h-4 mr-2" />
                    Termasuk
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {pkg.includes.map((include, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {include}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{pkg.originalPrice}</span>
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
