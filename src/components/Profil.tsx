import * as React from 'react';
import { Target, Eye, Users, MapPin, Award, Sparkles, Heart } from 'lucide-react';

const Profil: React.FC = () => {
  const pengurus = [
    {
      nama: 'Sarmin Arifin',
      jabatan: 'Ketua',
      foto: '/img/img_Sarmin.jpeg', // Ganti dengan path foto lokal atau URL baru
      deskripsi: 'Mahasiswa Akut, aktif dalam organisasi sejak 1997'
    },
    {
      nama: 'Dzoe Saputra',
      jabatan: 'Wakil Ketua',
      foto: '/img/img_zoe.jpeg', // Ganti dengan path foto lokal atau URL baru
      deskripsi: 'Guru SD, fokus pada program pendidikan anak'
    },
    {
      nama: 'Asep Bedog',
      jabatan: 'Sekretaris',
      foto: '/img/img_nos.jpeg',
      deskripsi: 'Pegawai swasta, bertanggung jawab atas administrasi'
    },
    {
      nama: 'Kolot Bedegong',
      jabatan: 'Bendahara',
      foto: '/img/img_kolot.jpeg',
      deskripsi: 'Akuntan, mengelola keuangan organisasi'
    },
    {
      nama: 'Ucok Gacor',
      jabatan: 'Koordinator Program',
      foto: '/img/img_ucok.jpeg',
      deskripsi: 'Wirausaha muda, koordinator kegiatan sosial'
    },
    {
      nama: 'Ecep Ngantuk',
      jabatan: 'Humas',
      foto: '/img/img_ecep.jpeg',
      deskripsi: 'Content creator, mengelola media sosial'
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" style={{overflow: 'visible'}}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-emerald-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Tentang Kami
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Profil Karang Taruna
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mengenal lebih dekat organisasi pemuda Kampung Cisaat yang berdedikasi untuk kemajuan desa
          </p>
        </div>

        {/* Sejarah */}
        <section className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">Sejarah Singkat</h2>
            </div>
            <div className="prose prose-xl text-gray-700 max-w-none">
              <p className="mb-6 text-lg" style={{lineHeight: '1.8', paddingBottom: '0.5rem'}}>
                Karang Taruna Kampung Cisaat didirikan pada tahun 2010 dengan semangat untuk memberdayakan 
                generasi muda desa. Berawal dari sekelompok pemuda yang peduli terhadap perkembangan desa, 
                organisasi ini tumbuh menjadi wadah kreatif dan inovatif bagi pemuda setempat.
              </p>
              <p className="text-lg" style={{lineHeight: '1.8', paddingBottom: '0.5rem'}}>
                Dalam perjalanannya, Karang Taruna Kampung Cisaat telah berhasil melaksanakan berbagai 
                program pemberdayaan masyarakat, mulai dari bidang pendidikan, ekonomi, sosial, hingga 
                lingkungan hidup. Dengan dukungan penuh dari pemerintah desa dan masyarakat, organisasi 
                ini terus berkembang dan memberikan kontribusi positif bagi kemajuan desa.
              </p>
            </div>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl shadow-xl p-10 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Visi</h2>
              </div>
              <p className="text-lg text-emerald-50" style={{lineHeight: '1.8', paddingBottom: '0.5rem'}}>
                Menjadi organisasi pemuda terdepan dalam pemberdayaan masyarakat desa menuju 
                terciptanya generasi muda yang kreatif, inovatif, mandiri, dan berkarakter.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl p-10 text-white hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-white/20 rounded-2xl group-hover:bg-white/30 transition-colors">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Misi</h2>
              </div>
              <ul className="text-blue-50 space-y-4 text-lg">
                <li className="flex items-start space-x-3" style={{paddingBottom: '0.25rem'}}>
                  <span className="text-yellow-300 mt-1">✦</span>
                  <span style={{lineHeight: '1.7'}}>Mengembangkan potensi pemuda melalui program pelatihan dan pendampingan</span>
                </li>
                <li className="flex items-start space-x-3" style={{paddingBottom: '0.25rem'}}>
                  <span className="text-yellow-300 mt-1">✦</span>
                  <span style={{lineHeight: '1.7'}}>Melaksanakan program pemberdayaan masyarakat berkelanjutan</span>
                </li>
                <li className="flex items-start space-x-3" style={{paddingBottom: '0.25rem'}}>
                  <span className="text-yellow-300 mt-1">✦</span>
                  <span style={{lineHeight: '1.7'}}>Membangun jaringan kerjasama dengan berbagai pihak</span>
                </li>
                <li className="flex items-start space-x-3" style={{paddingBottom: '0.25rem'}}>
                  <span className="text-yellow-300 mt-1">✦</span>
                  <span style={{lineHeight: '1.7'}}>Melestarikan nilai-nilai budaya dan kearifan lokal</span>
                </li>
                <li className="flex items-start space-x-3" style={{paddingBottom: '0.25rem'}}>
                  <span className="text-yellow-300 mt-1">✦</span>
                  <span style={{lineHeight: '1.7'}}>Menciptakan lingkungan yang kondusif bagi kreativitas pemuda</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section className="mb-20">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Struktur Organisasi</h2>
              </div>
              <p className="text-gray-600 text-lg" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>Tim solid yang berdedikasi untuk kemajuan organisasi</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {pengurus.map((person, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                  <div className="relative mb-6">
                    <img
                      src={person.foto}
                      alt={person.nama}
                      className="w-28 h-28 rounded-full mx-auto object-cover ring-4 ring-gradient-to-r from-emerald-400 to-blue-400 group-hover:ring-8 transition-all duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors" style={{lineHeight: '1.6', paddingBottom: '0.25rem'}}>{person.nama}</h3>
                  <p className="text-emerald-600 font-semibold mb-4 text-lg" style={{lineHeight: '1.6', paddingBottom: '0.25rem'}}>{person.jabatan}</p>
                  <p className="text-gray-600" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>{person.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section>
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-3xl text-white p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-yellow-300" />
                  <h2 className="text-4xl font-bold">Program Unggulan</h2>
                </div>
                <p className="text-green-100 text-xl" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>Inovasi dan dedikasi untuk kemajuan masyarakat</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{lineHeight: '1.5', paddingBottom: '0.25rem'}}>Pemberdayaan Ekonomi</h3>
                    <p className="text-green-100" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>Pelatihan kewirausahaan dan pengembangan UMKM untuk kemandirian ekonomi</p>
                  </div>
                </div>
                <div className="group text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{lineHeight: '1.5', paddingBottom: '0.25rem'}}>Pendidikan & Literasi</h3>
                    <p className="text-green-100" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>Program bimbingan belajar dan perpustakaan desa untuk mencerdaskan generasi</p>
                  </div>
                </div>
                <div className="group text-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4" style={{lineHeight: '1.5', paddingBottom: '0.25rem'}}>Lingkungan Hidup</h3>
                    <p className="text-green-100" style={{lineHeight: '1.7', paddingBottom: '0.5rem'}}>Gerakan hijau dan pengelolaan sampah berkelanjutan untuk bumi yang lestari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profil;