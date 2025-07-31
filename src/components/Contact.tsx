"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
            Hubungi Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Mari Wujudkan
            <br />
            <span className="text-gradient">Perjalanan Impian</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tim kami siap membantu merencanakan perjalanan terbaik untuk Anda. Hubungi kami kapan saja!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Cards */}
            <Card className="border-0 shadow-lg animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Alamat Kantor</h3>
                    <p className="text-muted-foreground text-sm">
                      Jl. Malioboro No. 123<br />
                      Yogyakarta 55213<br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Telepon</h3>
                    <p className="text-muted-foreground text-sm">
                      +62 812-3456-7890<br />
                      +62 274-567-890<br />
                      (Senin - Minggu: 08:00 - 22:00)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-travel-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      info@sobatbermain.com<br />
                      booking@sobatbermain.com<br />
                      support@sobatbermain.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Jam Operasional</h3>
                    <p className="text-muted-foreground text-sm">
                      Senin - Jumat: 08:00 - 20:00<br />
                      Sabtu - Minggu: 09:00 - 18:00<br />
                      <span className="text-secondary">Emergency: 24/7</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg animate-slide-up" style={{ animationDelay: '400ms' }}>
              <CardContent className="p-6">
                <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                  Kirim Pesan
                </CardTitle>
                <p className="text-muted-foreground">
                  Ceritakan rencana perjalanan Anda, tim kami akan membantu merencanakan yang terbaik
                </p>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nama Lengkap *
                      </label>
                      <Input placeholder="Masukkan nama lengkap" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email *
                      </label>
                      <Input type="email" placeholder="nama@email.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        No. Telepon *
                      </label>
                      <Input placeholder="+62 812-3456-7890" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Jenis Layanan
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih layanan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tour-package">Paket Tour</SelectItem>
                          <SelectItem value="flight-ticket">Tiket Pesawat</SelectItem>
                          <SelectItem value="hotel-booking">Booking Hotel</SelectItem>
                          <SelectItem value="custom-tour">Custom Tour</SelectItem>
                          <SelectItem value="others">Lainnya</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Destinasi
                      </label>
                      <Input placeholder="Misal: Bali, Thailand, dll" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Budget (IDR)
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih range budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-3jt">1 - 3 Juta</SelectItem>
                          <SelectItem value="3-5jt">3 - 5 Juta</SelectItem>
                          <SelectItem value="5-10jt">5 - 10 Juta</SelectItem>
                          <SelectItem value="10jt+">10 Juta+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Pesan / Kebutuhan Khusus
                    </label>
                    <textarea
                      className="w-full p-3 border border-input rounded-md resize-none h-32 text-sm"
                      placeholder="Ceritakan detail rencana perjalanan Anda, jumlah peserta, tanggal, kebutuhan khusus, dll..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Center
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="mt-16 bg-travel-gradient rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Butuh Konsultasi Cepat?
          </h3>
          <p className="text-white/90 mb-6 max-w-md mx-auto">
            Tim customer service kami siap membantu via WhatsApp untuk konsultasi langsung
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
