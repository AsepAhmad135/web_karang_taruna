import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

const ArtikelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const artikelData: { [key: string]: any } = {
    '1': {
      judul: 'Memeriahkan HUT RI ke-79 dengan Berbagai Perlombaan Seru',
      konten: `Karang Taruna Kampung Iim Balap berhasil menyelenggarakan perayaan HUT RI ke-79 yang meriah dengan berbagai perlombaan tradisional. Acara yang berlangsung di lapangan desa ini diikuti oleh seluruh warga dengan penuh semangat dan antusiasme tinggi.

Berbagai lomba yang diselenggarakan meliputi lomba balap karung, lomba makan kerupuk, lomba panjat pinang, dan lomba tarik tambang antar RT. Suasana kemeriahan terlihat dari tawa dan sorak-sorai warga yang mengikuti setiap perlombaan.

"Alhamdulillah acara berjalan lancar dan meriah. Ini adalah wujud rasa syukur dan cinta tanah air kami," kata Cisse Capcus selaku ketua panitia.

Acara dimulai pukul 08.00 WIB dengan upacara bendera sederhana yang diikuti seluruh warga. Setelah itu, berbagai lomba dimulai dengan penuh semangat dan keceriaan. Total hadiah yang dibagikan mencapai Rp 5 juta dengan berbagai doorprize menarik.

Acara ditutup dengan makan bersama dan hiburan musik tradisional yang semakin mempererat kebersamaan warga kampung.`,
      tanggal: '17 Agustus 2024',
      penulis: 'Admin KT',
      kategori: 'Kegiatan',
      gambar: '/img/img_kegiatan.jpeg'
    },
    '2': {
      judul: 'Pengajian Bersama Memperingati Jasa Para Pahlawan',
      konten: `Karang Taruna Kampung Iim Balap menyelenggarakan pengajian bersama dalam rangka mengenang jasa para pahlawan kemerdekaan. Acara yang berlangsung khidmat ini dihadiri oleh seluruh anggota karang taruna dan warga kampung.

Pengajian dipimpin oleh Ustadz Aang yang menyampaikan tausiah tentang pentingnya menghargai jasa para pahlawan dan meneladani semangat perjuangan mereka dalam kehidupan sehari-hari.

"Kita harus selalu mengingat jasa para pahlawan yang telah berjuang untuk kemerdekaan Indonesia. Semangat mereka harus kita teruskan dalam membangun bangsa," ujar Ustadz Aang.

Acara pengajian ini juga diisi dengan doa bersama untuk para pahlawan dan bangsa Indonesia. Para peserta terlihat khusyuk mengikuti rangkaian acara yang berlangsung dari maghrib hingga isya.

Setelah pengajian, acara dilanjutkan dengan makan bersama dan silaturahmi antar warga yang semakin mempererat tali persaudaraan di kampung.`,
      tanggal: '20 Agustus 2024',
      penulis: 'Ajeba',
      kategori: 'Kegiatan',
      gambar: '/img/img_ngaji.jpeg'
    },
    '3': {
      judul: 'Kebersamaan dalam Acara Camping dan Refreshing',
      konten: `Setelah sukses menjadi panitia perayaan HUT RI ke-79, anggota Karang Taruna Kampung Iim Balap mengadakan kegiatan camping dan refreshing sebagai bentuk apresiasi atas kerja keras selama ini. Acara yang berlangsung selama 2 hari 1 malam ini diikuti oleh 30 anggota aktif.

Kegiatan camping dilaksanakan di area perbukitan yang tidak jauh dari kampung dengan suasana alam yang sejuk dan asri. Para peserta terlihat antusias mengikuti berbagai kegiatan outdoor seperti hiking, games, dan api unggun.

"Kegiatan ini penting untuk mempererat tali persaudaraan antar anggota setelah kita bekerja keras mengorganisir acara 17 Agustus," kata Cisse Capcus, ketua Karang Taruna.

Selama camping, para anggota juga mengadakan evaluasi kegiatan dan merencanakan program-program ke depan. Suasana kekeluargaan terasa sangat kental dengan adanya sharing session dan diskusi santai di sekitar api unggun.

Acara ditutup dengan foto bersama dan komitmen untuk terus berkarya demi kemajuan kampung dan organisasi.`,
      tanggal: '30 Agustus 2024',
      penulis: 'Asep',
      kategori: 'Kegiatan',
      gambar: '/img/img_camp.jpeg'
    }
  };

  const artikel = artikelData[id || '1'];

  if (!artikel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Artikel tidak ditemukan</h1>
          <Link to="/berita" className="text-green-600 hover:text-green-700">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  const kategoriWarna = {
    'Prestasi': 'bg-yellow-100 text-yellow-800',
    'Kegiatan': 'bg-blue-100 text-blue-800',
    'Sosial': 'bg-pink-100 text-pink-800'
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          to="/berita" 
          className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Berita
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={artikel.gambar}
            alt={artikel.judul}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${kategoriWarna[artikel.kategori as keyof typeof kategoriWarna]}`}>
                {artikel.kategori}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                {artikel.tanggal}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <User className="h-4 w-4 mr-1" />
                {artikel.penulis}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {artikel.judul}
            </h1>

            <div className="prose prose-lg max-w-none">
              {artikel.konten.split('\n\n').map((paragraph: string, index: number) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArtikelDetail;