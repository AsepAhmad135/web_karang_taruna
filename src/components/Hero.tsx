import React from 'react';
import { ArrowRight, MapPin, Users, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Karang Taruna Desa Sejahtera
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Bersama Membangun Generasi Muda yang Kreatif, Inovatif, dan Berkarakter
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Desa Sejahtera, Kec. Makmur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5" />
              <span>150+ Anggota Aktif</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Didirikan 2010</span>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2 mx-auto">
            <span>Bergabung Dengan Kami</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;