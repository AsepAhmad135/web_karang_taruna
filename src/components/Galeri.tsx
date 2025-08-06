import React, { useState } from 'react';
import { Play, Download, Eye, Filter } from 'lucide-react';

const Galeri: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Kegiatan Sosial', 'Pelatihan', 'Olahraga', 'Lingkungan', 'Pendidikan'];

  const mediaItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Workshop Kewirausahaan Digital',
      category: 'Pelatihan',
      date: 'Januari 2025',
      description: 'Pelatihan digital marketing untuk UMKM desa'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Baksos Kesehatan Gratis',
      category: 'Kegiatan Sosial',
      date: 'Januari 2025',
      description: 'Pemeriksaan kesehatan gratis untuk warga desa'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Turnamen Futsal Pemuda',
      category: 'Olahraga',
      date: 'Desember 2024',
      description: 'Kompetisi futsal antar RT se-desa'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gerakan Tanam 1000 Pohon',
      category: 'Lingkungan',
      date: 'Desember 2024',
      description: 'Aksi penanaman pohon untuk kelestarian lingkungan'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/8425842/pexels-photo-8425842.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bimbingan Belajar Anak',
      category: 'Pendidikan',
      date: 'November 2024',
      description: 'Program bimbel gratis untuk anak-anak desa'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Rapat Koordinasi Pengurus',
      category: 'Kegiatan Sosial',
      date: 'November 2024',
      description: 'Evaluasi program kerja dan perencanaan kegiatan'
    },
    {
      type: 'video',
      src: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pelatihan Kepemimpinan',
      category: 'Pelatihan',
      date: 'Oktober 2024',
      description: 'Workshop pengembangan leadership untuk pemuda'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Penyuluhan Kesehatan',
      category: 'Kegiatan Sosial',
      date: 'Oktober 2024',
      description: 'Edukasi kesehatan untuk masyarakat desa'
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gotong Royong Desa',
      category: 'Lingkungan',
      date: 'September 2024',
      description: 'Kerja bakti membersihkan lingkungan desa'
    }
  ];

  const filteredItems = activeFilter === 'Semua' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeFilter);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galeri Dokumentasi</h1>
          <p className="text-lg text-gray-600">Koleksi foto dan video kegiatan Karang Taruna Desa Sejahtera</p>
        </div>

        {/* Filter Categories */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filter berdasarkan kategori:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                } shadow-sm`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Play className="h-16 w-16 text-white opacity-80" />
                  </div>
                )}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => setSelectedImage(item.src)}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all"
                  >
                    <Eye className="h-4 w-4 text-gray-700" />
                  </button>
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full transition-all">
                    <Download className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 p-2 rounded-full"
              >
                <span className="sr-only">Close</span>
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-16 bg-green-600 rounded-lg text-white p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Foto Kegiatan</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Video Dokumentasi</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100">Album Kegiatan</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-green-100">Tahun Berkarya</div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galeri;