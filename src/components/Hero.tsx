import * as React from 'react';
import { ArrowRight, MapPin, Users, Calendar, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-teal-700 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center min-h-screen">
        <div className="text-center w-full space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium tracking-wide">Organisasi Kepemudaan Terdepan</span>
          </div>
          
          {/* Main heading */}
          <div className="py-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-100 bg-clip-text text-transparent animate-slide-up" style={{lineHeight: '1.1', marginBottom: '-0.5rem'}}>
              Karang Taruna
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-emerald-100 animate-slide-up" style={{lineHeight: '1.1'}}>
              Kampung Cisaat
            </h2>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up delay-200">
            Bersama Membangun Generasi Muda yang{' '}
            <span className="font-semibold text-white">Kreatif</span>,{' '}
            <span className="font-semibold text-white">Inovatif</span>, dan{' '}
            <span className="font-semibold text-white">Berkarakter</span>
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up delay-300">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
              <MapPin className="h-8 w-8 mb-4 text-emerald-300 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2 text-white">Lokasi</div>
              <div className="text-emerald-200 text-sm leading-relaxed">Desa Sukatani, Kec. Cilawu</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
              <Users className="h-8 w-8 mb-4 text-emerald-300 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2 text-white">Anggota</div>
              <div className="text-emerald-200 text-sm leading-relaxed">50+ Anggota Aktif</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
              <Calendar className="h-8 w-8 mb-4 text-emerald-300 mx-auto group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2 text-white">Berdiri</div>
              <div className="text-emerald-200 text-sm leading-relaxed">Sejak Tahun 2010</div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-flex items-center space-x-3 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 animate-slide-up delay-500">
              <span>Bergabung Dengan Kami</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;