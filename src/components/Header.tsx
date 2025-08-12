import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Users, Home, Info, Calendar, Newspaper, Camera, Phone, UserPlus } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Beranda', icon: Home },
    { path: '/profil', label: 'Profil', icon: Info },
    { path: '/program', label: 'Program', icon: Calendar },
    { path: '/berita', label: 'Berita', icon: Newspaper },
    { path: '/galeri', label: 'Galeri', icon: Camera },
    { path: '/kontak', label: 'Kontak', icon: Phone },
    { path: '/daftar', label: 'Daftar', icon: UserPlus },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2.5 rounded-xl shadow-sm">
              <Users className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Karang Taruna</h1>
              <p className="text-xs text-green-600 font-medium">Kampung Cisaat</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-green-100 text-green-800 shadow-sm'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-green-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? 'bg-green-100 text-green-800 shadow-sm'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <IconComponent className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;