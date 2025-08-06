import React from 'react';
import { Calendar, Clock, MapPin, Users, Leaf, BookOpen, Heart, Briefcase } from 'lucide-react';

const Program: React.FC = () => {
  const programRutin = [
    {
      icon: BookOpen,
      nama: 'Bimbingan Belajar Gratis',
      deskripsi: 'Program les gratis untuk anak-anak SD dan SMP setiap hari Senin, Rabu, Jumat',
      jadwal: 'Senin, Rabu, Jumat - 16:00-18:00',
      lokasi: 'Balai Desa'
    },
    {
      icon: Briefcase,
      nama: 'Pelatihan Kewirausahaan',
      deskripsi: 'Workshop bulanan untuk mengembangkan jiwa wirausaha pemuda desa',
      jadwal: 'Minggu ke-3 setiap bulan',
      lokasi: 'Aula Karang Taruna'
    },
    {
      icon: Leaf,
      nama: 'Gerakan Hijau Desa',
      deskripsi: 'Kegiatan penanaman pohon dan pengelolaan sampah berkelanjutan',
      jadwal: 'Setiap hari Minggu',
      lokasi: 'Area publik desa'
    },
    {
      icon: Heart,
      nama: 'Bakti Sosial Kesehatan',
      deskripsi: 'Pemeriksaan kesehatan gratis dan penyuluhan kesehatan masyarakat',
      jadwal: 'Setiap bulan',
      lokasi: 'Puskesmas Desa'
    }
  ];

  const kegiatanMendatang = [
    {
      tanggal: '25 Januari 2025',
      waktu: '08:00 - 12:00',
      judul: 'Workshop Digital Marketing',
      deskripsi: 'Pelatihan pemasaran digital untuk UMKM desa',
      lokasi: 'Balai Desa',
      kapasitas: '30 peserta'
    },
    {
      tanggal: '2 Februari 2025',
      waktu: '14:00 - 17:00',
      judul: 'Turnamen Futsal Pemuda',
      deskripsi: 'Kompetisi futsal antar RT untuk mempererat persaudaraan',
      lokasi: 'Lapangan Desa',
      kapasitas: '8 tim'
    },
    {
      tanggal: '10 Februari 2025',
      waktu: '09:00 - 15:00',
      judul: 'Donor Darah & Kesehatan',
      deskripsi: 'Kegiatan donor darah dan pemeriksaan kesehatan gratis',
      lokasi: 'Puskesmas Desa',
      kapasitas: '100 peserta'
    },
    {
      tanggal: '15 Februari 2025',
      waktu: '10:00 - 14:00',
      judul: 'Pelatihan Hidroponik',
      deskripsi: 'Workshop budidaya tanaman dengan sistem hidroponik',
      lokasi: 'Greenhouse Desa',
      kapasitas: '25 peserta'
    }
  ];

  const dokumentasiKegiatan = [
    {
      judul: 'Pelatihan Kewirausahaan Desember 2024',
      foto: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400',
      deskripsi: 'Antusiasme peserta dalam mengikuti workshop wirausaha'
    },
    {
      judul: 'Baksos Kesehatan November 2024',
      foto: 'https://images.pexels.com/photos/6749777/pexels-photo-6749777.jpeg?auto=compress&cs=tinysrgb&w=400',
      deskripsi: 'Pelayanan kesehatan gratis untuk warga desa'
    },
    {
      judul: 'Gerakan Hijau Oktober 2024',
      foto: 'https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=400',
      deskripsi: 'Penanaman 100 bibit pohon di area desa'
    },
    {
      judul: 'Bimbel Gratis September 2024',
      foto: 'https://images.pexels.com/photos/8425842/pexels-photo-8425842.jpeg?auto=compress&cs=tinysrgb&w=400',
      deskripsi: 'Kegiatan belajar bersama anak-anak desa'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Program & Kegiatan</h1>
          <p className="text-lg text-gray-600">Beragam program untuk pemberdayaan pemuda dan masyarakat desa</p>
        </div>

        {/* Program Rutin */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Rutin</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programRutin.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.nama}</h3>
                      <p className="text-gray-600 mb-4">{program.deskripsi}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-2" />
                          {program.jadwal}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {program.lokasi}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Jadwal Kegiatan Mendatang */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Jadwal Kegiatan Mendatang</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {kegiatanMendatang.map((kegiatan, index) => (
                <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <div className="bg-green-600 text-white rounded-lg p-4 text-center">
                        <div className="text-sm font-medium">
                          {kegiatan.tanggal.split(' ')[0]}
                        </div>
                        <div className="text-xs">
                          {kegiatan.tanggal.split(' ')[1]} {kegiatan.tanggal.split(' ')[2]}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{kegiatan.judul}</h3>
                      <p className="text-gray-600 mb-3">{kegiatan.deskripsi}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {kegiatan.waktu}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {kegiatan.lokasi}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {kegiatan.kapasitas}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Daftar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dokumentasi Kegiatan */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Dokumentasi Kegiatan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dokumentasiKegiatan.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.foto}
                  alt={item.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.judul}</h3>
                  <p className="text-sm text-gray-600">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors">
              Lihat Semua Dokumentasi
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Program;