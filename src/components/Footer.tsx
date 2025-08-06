"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Send,
  ArrowRight
} from "lucide-react"

const quickLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Destinasi", href: "#destinations" },
  { name: "Paket Wisata", href: "#packages" },
  { name: "Layanan", href: "#services" },
  { name: "Tentang Kami", href: "#about" },
  { name: "Kontak", href: "#contact" }
]

const services = [
  { name: "Tiket Pesawat", href: "#" },
  { name: "Hotel & Resort", href: "#" },
  { name: "Paket Tour", href: "#" },
  { name: "Sewa Kendaraan", href: "#" },
  { name: "Travel Insurance", href: "#" },
  { name: "Visa & Dokumen", href: "#" }
]

const destinations = [
  { name: "Bali", href: "#" },
  { name: "Yogyakarta", href: "#" },
  { name: "Lombok", href: "#" },
  { name: "Thailand", href: "#" },
  { name: "Singapore", href: "#" },
  { name: "Malaysia", href: "#" }
]

const legalLinks = [
  { name: "Syarat & Ketentuan", href: "#" },
  { name: "Kebijakan Privasi", href: "#" },
  { name: "Kebijakan Pembatalan", href: "#" },
  { name: "FAQ", href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">SB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Sobat Bermain</h1>
                <p className="text-sm text-primary-foreground/80">Tour & Travel</p>
              </div>
            </div>

            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Sobat Bermain Tour & Travel adalah partner terpercaya untuk mewujudkan perjalanan impian Anda.
              Dengan pengalaman lebih dari 10 tahun, kami siap memberikan layanan terbaik.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <MapPin className="w-4 h-4 mr-3 text-secondary" />
                <span>Jl. Malioboro No. 123, Yogyakarta</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-secondary" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <span>info@sobatbermain.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-pink-600 hover:bg-pink-700 p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="sm" className="bg-red-600 hover:bg-red-700 p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6">Layanan Kami</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-bold text-lg mb-6">Destinasi Populer</h4>
            <ul className="space-y-3 mb-6">
              {destinations.map((destination, index) => (
                <li key={index}>
                  <a
                    href={destination.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Emergency Contact */}
            <div className="bg-secondary/10 rounded-lg p-4">
              <h5 className="font-medium mb-2 text-secondary">Emergency Contact</h5>
              <p className="text-sm text-primary-foreground/80 mb-2">24/7 Customer Support</p>
              <p className="text-lg font-bold text-secondary">+62 812-3456-7890</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-primary-foreground/80">
                © 2024 Sobat Bermain Tour & Travel. All rights reserved.
              </p>
              <p className="text-xs text-primary-foreground/60">
                Licensed & Insured Travel Agency | IATA Member
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
