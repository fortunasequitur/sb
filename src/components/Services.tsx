"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Plane,
  MapPin,
  Camera,
  Shield,
  Clock,
  Users,
  Car,
  Bed,
  Utensils,
  ArrowRight,
  Home
} from "lucide-react"

const services = [
  {
    icon: Bed,
    title: "Hotel & Resort",
    description: "Reservasi hotel dan resort terbaik di berbagai destinasi favorit dengan harga terjangkau.",
    features: ["Hotel Bintang 5", "Resort Mewah", "Harga Terbaik"]
  },
  {
    icon: Car,
    title: "Sewa Mobil",
    description: "Layanan sewa mobil harian, mingguan, atau bulanan dengan armada terbaru dan driver berpengalaman.",
    features: ["Armada Terbaru", "Driver Berpengalaman", "Lepas Kunci/Include Driver"]
  },
  {
    icon: Users,
    title: "Sewa Motor",
    description: "Sewa motor untuk kebutuhan perjalanan harian di kota tujuan Anda dengan harga terjangkau.",
    features: ["Unit Terawat", "Harga Terjangkau", "Proses Mudah"]
  },
  {
    icon: Home,
    title: "Sewa Villa",
    description: "Pilihan villa eksklusif untuk liburan keluarga, gathering, atau event spesial Anda.",
    features: ["Villa Eksklusif", "Fasilitas Lengkap", "Lokasi Strategis"]
  },
  {
    icon: Camera,
    title: "Sewa Alat Camp",
    description: "Sewa perlengkapan camping lengkap untuk petualangan outdoor Anda tanpa repot.",
    features: ["Tenda & Matras", "Alat Masak", "Sleeping Bag"]
  },
  {
    icon: MapPin,
    title: "MICE",
    description: "Layanan Meeting, Incentive, Convention, dan Exhibition untuk kebutuhan bisnis dan event perusahaan.",
    features: ["Meeting Package", "Event Organizer", "Venue & Akomodasi"]
  }
]

const whyChooseUs = [
  {
    icon: Clock,
    title: "Layanan 24/7",
    description: "Tim customer service siap melayani Anda kapan saja"
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Lebih dari 10 tahun pengalaman di industri travel"
  },
  {
    icon: Shield,
    title: "Terpercaya & Aman",
    description: "Lisensi resmi dan jaminan keamanan perjalanan"
  },
  {
    icon: MapPin,
    title: "Destinasi Lengkap",
    description: "50+ destinasi domestik dan internasional"
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Layanan Lainnya
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Butuh Layanan Lain?
            <br />
            <span className="text-gradient">Service Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berikut Layanan Travel Lengkap Kami
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-slide-up overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-travel-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Mengapa Memilih Sobat Bermain?
            </h3>
            <p className="text-muted-foreground">
              Kepercayaan Anda adalah prioritas utama kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-travel-gradient rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Butuh Bantuan Expert?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Tim travel consultant kami siap membantu merencanakan perjalanan impian Anda
            </p>
            <Button className="bg-white text-primary hover:bg-white/90">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
