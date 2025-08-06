import React from 'react';
import { Target, Eye, Users, MapPin } from 'lucide-react';

const Profil: React.FC = () => {
  const pengurus = [
    {
      nama: 'Ahmad Setiawan',
      jabatan: 'Ketua',
      foto: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Mahasiswa Teknik, aktif dalam organisasi sejak 2020'
    },
    {
      nama: 'Siti Nurhaliza',
      jabatan: 'Wakil Ketua',
      foto: 'https://images.pexels.com/photos/3792581/pexels-photo-3792581.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Guru SD, fokus pada program pendidikan anak'
    },
    {
      nama: 'Budi Santoso',
      jabatan: 'Sekretaris',
      foto: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Pegawai swasta, bertanggung jawab atas administrasi'
    },
    {
      nama: 'Dewi Lestari',
      jabatan: 'Bendahara',
      foto: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Akuntan, mengelola keuangan organisasi'
    },
    {
      nama: 'Rudi Hermawan',
      jabatan: 'Koordinator Program',
      foto: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Wirausaha muda, koordinator kegiatan sosial'
    },
    {
      nama: 'Maya Sari',
      jabatan: 'Humas',
      foto: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
      deskripsi: 'Content creator, mengelola media sosial'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Profil Karang Taruna</h1>
          <p className="text-lg text-gray-600">Mengenal lebih dekat organisasi pemuda Desa Sejahtera</p>
        </div>

        {/* Sejarah */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Sejarah Singkat</h2>
            </div>
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                Karang Taruna Desa Sejahtera didirikan pada tahun 2010 dengan semangat untuk memberdayakan 
                generasi muda desa. Berawal dari sekelompok pemuda yang peduli terhadap perkembangan desa, 
                organisasi ini tumbuh menjadi wadah kreatif dan inovatif bagi pemuda setempat.
              </p>
              <p className="mb-4">
                Dalam perjalanannya, Karang Taruna Desa Sejahtera telah berhasil melaksanakan berbagai 
                program pemberdayaan masyarakat, mulai dari bidang pendidikan, ekonomi, sosial, hingga 
                lingkungan hidup. Dengan dukungan penuh dari pemerintah desa dan masyarakat, organisasi 
                ini terus berkembang dan memberikan kontribusi positif bagi kemajuan desa.
              </p>
            </div>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Visi</h2>
              </div>
              <p className="text-lg text-gray-700">
                Menjadi organisasi pemuda terdepan dalam pemberdayaan masyarakat desa menuju 
                terciptanya generasi muda yang kreatif, inovatif, mandiri, dan berkarakter.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-900">Misi</h2>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Mengembangkan potensi pemuda melalui program pelatihan dan pendampingan</li>
                <li>• Melaksanakan program pemberdayaan masyarakat berkelanjutan</li>
                <li>• Membangun jaringan kerjasama dengan berbagai pihak</li>
                <li>• Melestarikan nilai-nilai budaya dan kearifan lokal</li>
                <li>• Menciptakan lingkungan yang kondusif bagi kreativitas pemuda</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Struktur Organisasi */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-8">
              <Users className="h-8 w-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Struktur Organisasi</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pengurus.map((person, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <img
                    src={person.foto}
                    alt={person.nama}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{person.nama}</h3>
                  <p className="text-green-600 font-medium mb-3">{person.jabatan}</p>
                  <p className="text-sm text-gray-600">{person.deskripsi}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program Unggulan */}
        <section>
          <div className="bg-green-600 rounded-lg text-white p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Program Unggulan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold mb-2">Pemberdayaan Ekonomi</h3>
                  <p className="text-green-100">Pelatihan kewirausahaan dan pengembangan UMKM</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold mb-2">Pendidikan & Literasi</h3>
                  <p className="text-green-100">Program bimbingan belajar dan perpustakaan desa</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mb-4">
                  <h3 className="text-xl font-semibold mb-2">Lingkungan Hidup</h3>
                  <p className="text-green-100">Gerakan hijau dan pengelolaan sampah berkelanjutan</p>
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