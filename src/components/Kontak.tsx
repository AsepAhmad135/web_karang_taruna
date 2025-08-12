import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, MessageCircle, Send } from 'lucide-react';

const Kontak: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Pesan Anda telah terkirim! Terima kasih.');
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-blue-100 to-purple-50" style={{overflow: 'visible'}}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-300/40 to-blue-300/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-300/40 to-pink-300/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-200/30 to-orange-200/30 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <MessageCircle className="h-4 w-4 mr-2" />
            Hubungi Kami
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Mari Terhubung
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Jangan ragu untuk menghubungi kami kapan saja. Kami siap membantu dan menjawab pertanyaan Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-8">Informasi Kontak</h2>
              
              {/* Contact Details */}
              <div className="space-y-8 mb-10">
                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Alamat Sekretariat</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Jl. Raya Citelu No. 123<br />
                      Kec. Cilawu, Kab. Garut<br />
                      Jawa Barat 
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Nomor Telepon</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Telepon: (0274) 123456<br />
                      WhatsApp: +62 812-3456-7890
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                    <p className="text-gray-600 leading-relaxed">
                      info@karangtaruniimbalap.id<br />
                      admin@karangtaruniimbalap.id
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-emerald-50 transition-all duration-300">
                  <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Jam Operasional</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Senin - Jumat: 08:00 - 16:00<br />
                      Sabtu: 08:00 - 12:00<br />
                      Minggu: Libur
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ikuti Media Sosial Kami</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="group bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/25"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="#"
                    className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-500/25"
                  >
                    <Youtube className="h-6 w-6" />
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/25"
                  >
                    <MessageCircle className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-8">Kirim Pesan</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    value={formData.nama}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                    placeholder="Masukkan nama lengkap Anda"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subjek" className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <input
                    type="text"
                    id="subjek"
                    name="subjek"
                    value={formData.subjek}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-lg focus:shadow-lg"
                    placeholder="Subjek pesan Anda"
                  />
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows={5}
                    value={formData.pesan}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 hover:shadow-lg focus:shadow-lg resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105"
                >
                  <Send className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  <span>Kirim Pesan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">Lokasi Kami</h2>
            <p className="text-xl text-gray-600">Temukan kami di jantung Kampung Iim Balap</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8">
            <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="p-6 bg-white/80 rounded-2xl backdrop-blur-sm">
                  <MapPin className="h-20 w-20 text-emerald-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Peta Interaktif</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Peta interaktif akan ditampilkan di sini<br />
                    (Integrasi dengan Google Maps atau layanan peta lainnya)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Buttons */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a
            href="tel:+6281234567890"
            className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg text-center transition-colors"
          >
            <Phone className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Telepon Langsung</h3>
            <p className="text-sm opacity-90">Hubungi kami sekarang</p>
          </a>
          
          <a
            href="https://wa.me/6281234567890"
            className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg text-center transition-colors"
          >
            <MessageCircle className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">WhatsApp</h3>
            <p className="text-sm opacity-90">Chat dengan kami</p>
          </a>
          
          <a
            href="mailto:info@karangtarunsejahtera.id"
            className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg text-center transition-colors"
          >
            <Mail className="h-8 w-8 mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-sm opacity-90">Kirim email ke kami</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kontak;