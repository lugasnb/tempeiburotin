"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Clock, Star, Award, Shield } from "lucide-react"

export default function HomePage() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/6281313294565?text=Halo%20Ibu%20Rotin,%20saya%20ingin%20memesan%20tempe`, "_blank")
  }

  const handleCall = () => {
    window.open(`tel:081313294565`, "_self")
  }

  const handleLocationClick = () => {
    const address =
      "Gg. H.Zaenab Blok Kasab Kidul, Karangampel Kidul, Kec. Karangampel, Kabupaten Indramayu, Jawa Barat 45283"
    const encodedAddress = encodeURIComponent(address)
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Tempe Ibu Rotin</h1>
                <p className="text-sm text-gray-500">Tempe Tradisional Berkualitas</p>
              </div>
            </div>
            <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-50">
              <Clock className="w-3 h-3 mr-1" />
              Buka 24 Jam
            </Badge>
          </div>
        </div>
      </header>

      <section className="relative h-screen bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="/indonesian-tempe-making.png"
            alt="Tempe tradisional buatan Ibu Rotin"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-6 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tempe Tradisional
              <span className="block text-emerald-400">Berkualitas Tinggi</span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-90">
              Dibuat dengan resep turun temurun dan bahan-bahan pilihan terbaik untuk keluarga Indonesia.
            </p>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-6 text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              <Phone className="w-6 h-6 mr-3" />
              Pesan via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Produk Unggulan</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tempe berkualitas tinggi dengan proses fermentasi tradisional dan higienis
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-square">
                  <img
                    src="/placeholder-78xq7.png"
                    alt="Tempe segar berkualitas tinggi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-12 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold text-gray-900 mb-4">Tempe Tradisional</h4>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Tempe segar dengan tekstur padat dan rasa gurih yang dibuat dengan resep turun temurun.
                  </p>

                  <div className="grid grid-cols-1 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Star className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Kualitas Premium</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Award className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Resep Turun Temurun</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Shield className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Higienis & Aman</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Pesan Sekarang
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Tentang</h3>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Dengan pengalaman 65 tahun dalam membuat tempe tradisional, Ibu Rotin telah menjadi pilihan utama
                  masyarakat Karangampel untuk mendapatkan tempe berkualitas tinggi.
                </p>
                <p>
                  Setiap hari, kami memproduksi tempe segar menggunakan kedelai pilihan dan proses fermentasi yang telah
                  teruji. Komitmen kami adalah memberikan produk terbaik untuk keluarga Indonesia.
                </p>
              </div>
              <div className="mt-8 p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-emerald-800 font-semibold text-lg">Dibuat dengan cinta dan dedikasi</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="/indonesian-tempe-woman.png" alt="Ibu Rotin sedang membuat tempe" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
            <p className="text-xl text-gray-600">Siap melayani pesanan Anda kapan saja</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kontak Section */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Kontak</h4>
                <div className="text-center py-8">
                <p className="text-2xl font-bold text-emerald-600 mb-8">081313294565</p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  WhatsApp
                </Button>
                </div>
              </div>
            </Card>

            {/* Lokasi Section */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Lokasi</h4>
                <div
                  className="cursor-pointer hover:bg-gray-50 p-4 rounded-xl transition-colors text-center"
                  onClick={handleLocationClick}
                >
                  <div className="text-gray-700 leading-relaxed hover:text-emerald-600 transition-colors">
                    Gg. H.Zaenab Blok Kasab Kidul
                    <br />
                    Karangampel Kidul, Kec. Karangampel
                    <br />
                    Kabupaten Indramayu, Jawa Barat 45283
                    <br />
                    <span className="text-sm text-emerald-600 font-medium mt-2 block">
                      Klik untuk buka di Google Maps
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Jam Buka Section */}
            <Card className="border-0 shadow-xl rounded-3xl bg-white p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Jam Buka</h4>
                <div className="text-center py-8">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">24 Jam</div>
                  <div className="text-lg text-gray-700 font-medium">Setiap Hari</div>
                  <div className="text-sm text-gray-500 mt-2">Siap melayani kapan saja</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold">Tempe Ibu Rotin</span>
          </div>
          <p className="text-gray-400 mb-6 text-lg">Tempe tradisional berkualitas tinggi untuk keluarga Indonesia</p>
          <p className="text-gray-500">© 2025 Tempe Ibu Rotin. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}
