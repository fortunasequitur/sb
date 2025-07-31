"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Calendar, Users, Search } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
          alt="Beautiful tropical beach destination"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6 animate-fade-in">
          <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
          About Sobat Bermain
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
          Temukan Petualangan
          <br />
          <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-secondary to-yellow-300">
            Bersama Kami
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slide-up">
          Jelajahi destinasi menakjubkan Indonesia dan dunia dengan paket wisata terbaik.
          Ciptakan kenangan indah yang tak terlupakan bersama Sobat Bermain Tour & Travel.
        </p>

        {/* Search Form */}
        <Card className="max-w-4xl mx-auto p-6 bg-white/95 backdrop-blur-sm shadow-2xl animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Destination */}
            <div className="relative">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                <MapPin className="w-4 h-4 inline mr-1" />
                Destinasi
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih Destinasi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bali">Bali, Indonesia</SelectItem>
                  <SelectItem value="yogyakarta">Yogyakarta, Indonesia</SelectItem>
                  <SelectItem value="lombok">Lombok, Indonesia</SelectItem>
                  <SelectItem value="thailand">Thailand</SelectItem>
                  <SelectItem value="singapore">Singapore</SelectItem>
                  <SelectItem value="malaysia">Malaysia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Date */}
            <div className="relative">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                <Calendar className="w-4 h-4 inline mr-1" />
                Tanggal Keberangkatan
              </label>
              <Input
                type="date"
                className="w-full"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Guests */}
            <div className="relative">
              <label className="text-sm font-medium text-muted-foreground mb-2 block">
                <Users className="w-4 h-4 inline mr-1" />
                Jumlah Tamu
              </label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="1 Tamu" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Tamu</SelectItem>
                  <SelectItem value="2">2 Tamu</SelectItem>
                  <SelectItem value="3">3 Tamu</SelectItem>
                  <SelectItem value="4">4 Tamu</SelectItem>
                  <SelectItem value="5">5+ Tamu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground h-10">
                <Search className="w-4 h-4 mr-2" />
                Cari Paket
              </Button>
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 animate-slide-up">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Jelajahi Paket Wisata
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8">
            Hubungi Kami
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
            <div className="text-white/80 text-sm">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
            <div className="text-white/80 text-sm">Destinasi</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">10+</div>
            <div className="text-white/80 text-sm">Tahun Pengalaman</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
            <div className="text-white/80 text-sm">Customer Support</div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float hidden lg:block" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-white/10 rounded-full animate-float hidden lg:block" style={{animationDelay: '4s'}}></div>
    </section>
  )
}
