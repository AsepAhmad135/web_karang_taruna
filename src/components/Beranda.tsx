import React from 'react';
import Hero from './Hero';
import { Quote, Calendar, Users, Heart, Trophy } from 'lucide-react';

const Beranda: React.FC = () => {
  const recentActivities = [
    {
      title: 'Baksos Kesehatan Gratis',
      date: '15 Januari 2025',
      description: 'Kegiatan bakti sosial pemeriksaan kesehatan gratis untuk warga desa',
      image: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Pelatihan Wirausaha Muda',
      date: '8 Januari 2025',
      description: 'Workshop kewirausahaan untuk pemuda desa dengan narasumber UMKM sukses',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Gotong Royong Lingkungan',
      date: '1 Januari 2025',
      description: 'Kegiatan bersih-bersih lingkungan dan penanaman pohon di area desa',
      image: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const stats = [
    { icon: Users, label: 'Anggota Aktif', value: '50+' },
    { icon: Calendar, label: 'Kegiatan per Tahun', value: '10+' },
    { icon: Heart, label: 'Program Sosial', value: '12+' },
    { icon: Trophy, label: 'Penghargaan', value: '5+' },
  ];

  return (
    <div>
      <Hero />
      
      {/* Sambutan Ketua */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Quote className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Sambutan Ketua</h2>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-6">
                "Karang Taruna Desa Sukatani berkomitmen untuk menjadi wadah pengembangan potensi 
                pemuda desa melalui berbagai program kreatif dan inovatif. Bersama-sama kita wujudkan 
                generasi muda yang berkarakter, mandiri, dan berdaya saing tinggi."
              </blockquote>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
                  alt="Ketua Karang Taruna"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Cisse Capcus</h4>
                  <p className="text-gray-600">Ketua Karang Taruna</p>
                </div>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kegiatan Karang Taruna"
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistik */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prestasi Kami</h2>
            <p className="text-lg text-gray-600">Capaian yang telah diraih bersama</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kegiatan Terbaru */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kegiatan Terbaru</h2>
            <p className="text-lg text-gray-600">Update terkini dari aktivitas Karang Taruna</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-green-600 font-medium mb-2">{activity.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;