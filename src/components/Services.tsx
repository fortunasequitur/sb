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
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Tiket Pesawat",
    description: "Booking tiket pesawat domestik dan internasional dengan harga terbaik dan pilihan maskapai terlengkap.",
    features: ["Harga Kompetitif", "Proses Cepat", "24/7 Support"]
  },
  {
    icon: Bed,
    title: "Hotel & Resort",
    description: "Reservasi hotel dan resort di seluruh dunia dengan berbagai pilihan kelas dan fasilitas terbaik.",
    features: ["Hotel Bintang 5", "Resort Mewah", "Harga Terjangkau"]
  },
  {
    icon: Car,
    title: "Transportasi",
    description: "Layanan sewa kendaraan dan transportasi local untuk kemudahan perjalanan Anda.",
    features: ["Mobil AC", "Driver Berpengalaman", "Flexible Schedule"]
  },
  {
    icon: Camera,
    title: "Tour Guide",
    description: "Pemandu wisata profesional dan berpengalaman yang siap membantu perjalanan Anda.",
    features: ["Guide Bersertifikat", "Multilingual", "Local Knowledge"]
  },
  {
    icon: Utensils,
    title: "Kuliner Tour",
    description: "Jelajahi cita rasa autentik dari berbagai daerah dengan panduan kuliner terbaik.",
    features: ["Food Blogger", "Hidden Gems", "Cultural Experience"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Perlindungan menyeluruh untuk perjalanan Anda dengan coverage yang lengkap.",
    features: ["Medical Coverage", "Trip Cancellation", "24/7 Assistance"]
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
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Layanan Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Saatnya Menjelajah
            <br />
            <span className="text-gradient">Bersama Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan layanan travel lengkap untuk memastikan perjalanan Anda berjalan lancar dan menyenangkan
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
