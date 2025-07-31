"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Users, MapPin, Phone, Mail, User, CreditCard, Check } from "lucide-react"

interface BookingDialogProps {
  children: React.ReactNode
  packageName?: string
  packagePrice?: string
}

export function BookingDialog({ children, packageName, packagePrice }: BookingDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    destination: packageName || "",
    departureDate: "",
    guests: "1",
    duration: "",
    budget: packagePrice || "",
    specialRequests: ""
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Nama lengkap wajib diisi"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email wajib diisi"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format email tidak valid"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Nomor telepon wajib diisi"
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Format nomor telepon tidak valid"
    }

    if (!formData.destination.trim()) {
      newErrors.destination = "Destinasi wajib dipilih"
    }

    if (!formData.departureDate) {
      newErrors.departureDate = "Tanggal keberangkatan wajib diisi"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      setIsOpen(false)
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        destination: packageName || "",
        departureDate: "",
        guests: "1",
        duration: "",
        budget: packagePrice || "",
        specialRequests: ""
      })
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            {isSuccess ? "Booking Berhasil!" : "Form Pemesanan"}
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Terima kasih!
            </h3>
            <p className="text-muted-foreground mb-4">
              Permintaan booking Anda telah berhasil dikirim. Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi.
            </p>
            <p className="text-sm text-muted-foreground">
              Cek email Anda untuk detail lebih lanjut.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground flex items-center">
                <User className="w-4 h-4 mr-2" />
                Informasi Pribadi
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Nama Lengkap *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="nama@email.com"
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Nomor Telepon *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+62 812-3456-7890"
                  className={errors.phone ? "border-destructive" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Trip Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Informasi Perjalanan
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="destination">Destinasi *</Label>
                  <Select
                    value={formData.destination}
                    onValueChange={(value) => handleInputChange("destination", value)}
                  >
                    <SelectTrigger className={errors.destination ? "border-destructive" : ""}>
                      <SelectValue placeholder="Pilih destinasi" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Bali Cultural & Beach Escape">Bali Cultural & Beach Escape</SelectItem>
                      <SelectItem value="Thailand Island Hopping">Thailand Island Hopping</SelectItem>
                      <SelectItem value="Yogyakarta Heritage Tour">Yogyakarta Heritage Tour</SelectItem>
                      <SelectItem value="Raja Ampat Explorer">Raja Ampat Explorer</SelectItem>
                      <SelectItem value="Custom Package">Paket Custom</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.destination && (
                    <p className="text-sm text-destructive mt-1">{errors.destination}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="departureDate">Tanggal Keberangkatan *</Label>
                  <Input
                    id="departureDate"
                    type="date"
                    value={formData.departureDate}
                    onChange={(e) => handleInputChange("departureDate", e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={errors.departureDate ? "border-destructive" : ""}
                  />
                  {errors.departureDate && (
                    <p className="text-sm text-destructive mt-1">{errors.departureDate}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests">Jumlah Tamu</Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => handleInputChange("guests", value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Tamu</SelectItem>
                      <SelectItem value="2">2 Tamu</SelectItem>
                      <SelectItem value="3">3 Tamu</SelectItem>
                      <SelectItem value="4">4 Tamu</SelectItem>
                      <SelectItem value="5+">5+ Tamu</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Durasi</Label>
                  <Input
                    id="duration"
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                    placeholder="Misal: 3 hari 2 malam"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="budget">Budget (IDR)</Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleInputChange("budget", e.target.value)}
                  placeholder="Masukkan budget Anda"
                />
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <Label htmlFor="specialRequests">Permintaan Khusus</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Ceritakan kebutuhan khusus Anda: diet, alergi, aktivitas favorit, dll..."
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Memproses...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    Kirim Booking
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                disabled={isSubmitting}
              >
                Batal
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              * Tim kami akan menghubungi Anda untuk konfirmasi pembayaran dan detail lebih lanjut
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
