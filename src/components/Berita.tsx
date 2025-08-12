import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Berita: React.FC = () => {
  const artikelUtama = {
    judul: 'Memeriahkan HUT RI ke-79 dengan Berbagai Perlombaan Seru',
    excerpt: 'Karang Taruna Kampung Iim Balap berhasil menyelenggarakan perayaan HUT RI ke-79 yang meriah dengan berbagai perlombaan tradisional yang diikuti seluruh warga...',
    tanggal: '17 Agustus 2024',
    penulis: 'Admin KT',
    kategori: 'Kegiatan',
    gambar: '/img/img_kegiatan.jpeg'
  };

  const beritaTerbaru = [
    {
      id: '2',
      judul: 'Pengajian Bersama Memperingati Jasa Para Pahlawan',
      excerpt: 'Karang Taruna menyelenggarakan pengajian khidmat untuk mengenang jasa para pahlawan kemerdekaan...',
      tanggal: '20 Agustus 2024',
      penulis: 'Maya Sari',
      kategori: 'Kegiatan',
      gambar: '/img/img_ngaji.jpeg'
    },
    {
      id: '3',
      judul: 'Kebersamaan dalam Acara Camping dan Refreshing',
      excerpt: 'Setelah sukses menjadi panitia HUT RI, anggota Karang Taruna mengadakan camping sebagai refreshing...',
      tanggal: '30 Agustus 2024',
      penulis: 'Rudi Hermawan',
      kategori: 'Kegiatan',
      gambar: '/img/img_camp.jpeg'
    },
    {
      id: '4',
      judul: 'Kebersamaan dalam Acara Pernikahan Warga',
      excerpt: 'Anggota karang taruna turut memeriahkan acara pernikahan warga dengan penuh kebersamaan...',
      tanggal: '12 Juni 2024',
      penulis: 'Siti Nurhaliza',
      kategori: 'Sosial',
      gambar: '/img/img_acara.jpeg'
    },
    {
      id: '5',
      judul: 'Moment Santai dan Healing Bersama',
      excerpt: 'Kegiatan santai dan healing menjadi tradisi untuk mempererat silaturahmi antar anggota...',
      tanggal: '10 Mei 2024',
      penulis: 'Ahmad Setiawan',
      kategori: 'Organisasi',
      gambar: '/img/img_heal.jpeg'
    },
    {
      id: '6',
      judul: 'Makan Bersama Setelah Kegiatan Gotong Royong',
      excerpt: 'Tradisi makan bersama setelah gotong royong semakin mempererat kebersamaan warga kampung...',
      tanggal: '8 April 2024',
      penulis: 'Dewi Lestari',
      kategori: 'Sosial',
      gambar: '/img/img_makan.jpeg'
    }
  ];

  const kategoriWarna = {
    'Prestasi': 'bg-yellow-100 text-yellow-800',
    'Kegiatan': 'bg-blue-100 text-blue-800',
    'Lingkungan': 'bg-green-100 text-green-800',
    'Sosial': 'bg-pink-100 text-pink-800',
    'Organisasi': 'bg-purple-100 text-purple-800',
    'Pendidikan': 'bg-indigo-100 text-indigo-800',
    'Olahraga': 'bg-red-100 text-red-800'
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50" style={{overflow: 'visible'}}>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-200/30 to-emerald-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Berita & Artikel</h1>
          <p className="text-lg text-gray-600">Update terkini seputar kegiatan dan program Karang Taruna</p>
        </div>

        {/* Artikel Utama */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={artikelUtama.gambar}
                  alt={artikelUtama.judul}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${kategoriWarna[artikelUtama.kategori as keyof typeof kategoriWarna]}`}>
                    {artikelUtama.kategori}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {artikelUtama.tanggal}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{artikelUtama.judul}</h2>
                <p className="text-gray-600 mb-6">{artikelUtama.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    {artikelUtama.penulis}
                  </div>
                  <Link 
                    to="/artikel/1"
                    className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2 touch-manipulation"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Berita Terbaru */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Berita Terbaru</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beritaTerbaru.map((artikel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={artikel.gambar}
                  alt={artikel.judul}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${kategoriWarna[artikel.kategori as keyof typeof kategoriWarna]}`}>
                      {artikel.kategori}
                    </span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {artikel.tanggal}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{artikel.judul}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{artikel.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {artikel.penulis}
                    </div>
                    <Link 
                      to={`/artikel/${artikel.id}`}
                      className="text-green-600 hover:text-green-700 active:text-green-800 font-medium text-sm transition-colors touch-manipulation"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Kategori Filter */}
        <section className="mt-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kategori Artikel</h3>
            <div className="flex flex-wrap gap-3">
              {Object.keys(kategoriWarna).map((kategori) => (
                <button
                  key={kategori}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-80 ${kategoriWarna[kategori as keyof typeof kategoriWarna]}`}
                >
                  <Tag className="h-4 w-4 inline mr-2" />
                  {kategori}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Subscribe */}
        <section className="mt-16">
          <div className="bg-green-600 rounded-lg text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Berlangganan Newsletter</h3>
            <p className="mb-6">Dapatkan update terbaru langsung di email Anda</p>
            <div className="max-w-md mx-auto flex space-x-4">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2 rounded-lg text-gray-900"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg transition-colors">
                Berlangganan
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Berita;