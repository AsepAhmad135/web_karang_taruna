import React from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Phone, Mail, Facebook, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Profil', href: '/profil' },
    { name: 'Program', href: '/program' },
    { name: 'Berita', href: '/berita' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kontak', href: '/kontak' }
  ];

  const programs = [
    'Bimbingan Belajar Gratis',
    'Pelatihan Kewirausahaan',
    'Gerakan Hijau Desa',
    'Bakti Sosial Kesehatan'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-full">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Karang Taruna</h3>
                <p className="text-gray-400">Kampung Cisaat</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Organisasi pemuda yang berkomitmen membangun generasi muda yang kreatif, 
              inovatif, dan berkarakter untuk kemajuan desa.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-600 hover:bg-pink-700 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Program Unggulan</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-gray-400">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informasi Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Jl. Citelu No. 123</p>
                  <p>Kec. Cilawu, Kab. Garut</p>
                  <p>Jawa Barat 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600" />
                <span className="text-gray-400">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-gray-400">info@karangtaruncisaat.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>&copy; 2025 Karang Taruna Kampung Cisaat. All rights reserved.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Dibuat dengan</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>untuk kemajuan desa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;