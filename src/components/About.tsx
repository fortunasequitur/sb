"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, Award, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react";

const achievements = [
  {
    number: "500+",
    label: "Happy Travelers",
    description: "Pelanggan yang puas dengan layanan kami"
  },
  {
    number: "50+",
    label: "Destinasi",
    description: "Destinasi domestik dan internasional"
  },
  {
    number: "10+",
    label: "Tahun Pengalaman",
    description: "Melayani industri pariwisata"
  },
  {
    number: "4.9",
    label: "Rating",
    description: "Dari review pelanggan kami"
  }
]

const clientLogos = [
  "/images/clients/Astra.jpg",
  "/images/clients/Bawaslu.png",
  "/images/clients/DisDik Bandung.png",
  "/images/clients/DisPen.jpg",
  "/images/clients/Dishub.png",
];

function ClientCarousel() {
  // Duplikasi logo untuk loop
  const logos = clientLogos.concat(clientLogos);
  return (
    <div className="overflow-x-auto overflow-y-visible w-full px-2 md:px-0" style={{height: 120}}>
      <div
        className="flex gap-6 md:gap-12 items-center w-max animate-marquee"
        style={{width: 'max-content', minWidth: '100%'}}
      >
        {logos.map((src, i) => (
          <div key={i} className="flex-shrink-0 flex items-center justify-center h-28 w-48 md:h-24 md:w-40 bg-white rounded-xl shadow border">
            <img src={src} alt={`Client ${i+1}`} className="h-20 md:h-16 object-contain mx-auto" />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
            Tentang Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perjalanan Dimulai
            <br />
            <span className="text-gradient">Dari Mimpi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sobat Bermain Tour & Travel hadir untuk mewujudkan mimpi perjalanan Anda dengan pengalaman tak terlupakan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Misi Kami: Menjadi Sobat Terbaik dalam Perjalanan Anda
            </h3>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Sejak didirikan pada tahun 2014, Sobat Bermain Tour & Travel telah berkomitmen untuk memberikan
                pengalaman perjalanan terbaik bagi setiap pelanggan. Kami percaya bahwa setiap perjalanan adalah
                kesempatan untuk menciptakan kenangan yang berharga.
              </p>

              <p>
                Dengan tim yang berpengalaman lebih dari 10 tahun di industri pariwisata, kami memahami betul
                kebutuhan dan keinginan travelers modern. Dari backpacker hingga luxury traveler, kami siap
                melayani dengan sepenuh hati.
              </p>

              <p>
                Visi kami adalah menjadi travel agent terdepan di Indonesia yang tidak hanya menjual paket wisata,
                tetapi juga membangun hubungan jangka panjang dengan setiap pelanggan sebagai sobat perjalanan sejati.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Users className="w-4 h-4 mr-2" />
                Bergabung dengan Kami
              </Button>
              <Button variant="outline">
                Lihat Galeri Perjalanan
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative overflow-hidden rounded-2xl h-96">
              <Image
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&crop=center"
                alt="About Sobat Bermain - Adventure and Travel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <Card className="absolute -bottom-6 -left-6 bg-white shadow-2xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </CardContent>
            </Card>

            <Card className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground shadow-2xl border-0">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Star className="w-4 h-4 fill-current mr-1" />
                  <span className="font-bold">4.9</span>
                </div>
                <div className="text-xs opacity-90">Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {achievement.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Client */}
        <div className="bg-background rounded-3xl p-8 md:p-12 mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Client
            </h3>
            <p className="text-muted-foreground">
              Beberapa client yang telah mempercayai layanan kami
            </p>
          </div>
          <ClientCarousel />
        </div>
      </div>
    </section>
  )
}
