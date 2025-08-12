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
      judul: 'Memeriahkan Kemerdekaan RI',
      foto: '/img/img_kegiatan.jpeg',
      deskripsi: 'Antusiasme peserta dalam mengikuti kegiatan 17 agustus'
    },
    {
      judul: 'Membuat Panggung Untuk Acara Pengajian',
      foto: '/img/img_makan.jpeg',
      deskripsi: 'Utamakan Makan'
    },
    {
      judul: 'Berburu Makan Gratis Di Pernikahan Teman',
      foto: '/img/img_acara.jpeg',
      deskripsi: 'Amplop 2k, makan sepuasnyaaaa hahahah'
    },
    {
      judul: 'Ngopss Ngap',
      foto: '/img/img_heal.jpeg',
      deskripsi: ''
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-slate-100 to-gray-100" style={{overflow: 'visible'}}>
      {/* Simple Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-indigo-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-slate-100/50 to-gray-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6 border border-slate-200">
            <Calendar className="h-4 w-4 mr-2" />
            Program & Kegiatan
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-6">
            Program Kami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beragam program untuk pemberdayaan pemuda dan masyarakat desa menuju kemajuan bersama
          </p>
        </div>

        {/* Program Rutin */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Program Rutin</h2>
            <p className="text-xl text-gray-600">Program berkelanjutan untuk pemberdayaan masyarakat</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programRutin.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">{program.nama}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{program.deskripsi}</p>
                      <div className="space-y-3">
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-5 w-5 mr-3 text-emerald-500" />
                          <span className="font-medium">{program.jadwal}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                          <span className="font-medium">{program.lokasi}</span>
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
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Jadwal Kegiatan Mendatang</h2>
            <p className="text-xl text-gray-600">Jangan lewatkan kegiatan menarik yang akan datang</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
            <div className="divide-y divide-gray-200/50">
              {kegiatanMendatang.map((kegiatan, index) => (
                <div key={index} className="p-8 hover:bg-emerald-50/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="flex-shrink-0 mb-6 md:mb-0">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl p-6 text-center shadow-lg">
                        <div className="text-2xl font-bold">
                          {kegiatan.tanggal.split(' ')[0]}
                        </div>
                        <div className="text-sm opacity-90">
                          {kegiatan.tanggal.split(' ')[1]} {kegiatan.tanggal.split(' ')[2]}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{kegiatan.judul}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{kegiatan.deskripsi}</p>
                      <div className="flex flex-wrap gap-6 text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 mr-2 text-emerald-500" />
                          <span className="font-medium">{kegiatan.waktu}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                          <span className="font-medium">{kegiatan.lokasi}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 mr-2 text-purple-500" />
                          <span className="font-medium">{kegiatan.kapasitas}</span>
                        </div>
                      </div>
                    </div>
                    <button className="mt-6 md:mt-0 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Dokumentasi Kegiatan</h2>
            <p className="text-xl text-gray-600">Momen berharga dari setiap kegiatan yang telah terlaksana</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dokumentasiKegiatan.map((item, index) => (
              <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={item.foto}
                    alt={item.judul}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg group-hover:text-emerald-600 transition-colors">{item.judul}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-orange-500/25">
              Lihat Semua Dokumentasi
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Program;