import React, { useState } from 'react';
import { Phone, Mail, Calendar, Users, Check } from 'lucide-react';

const Daftar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('anggota');
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pendidikan: '',
    pekerjaan: '',
    motivasi: ''
  });

  const [kegiatanData, setKegiatanData] = useState({
    nama: '',
    email: '',
    telepon: '',
    kegiatan: '',
    catatan: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (activeTab === 'anggota') {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    } else {
      setKegiatanData({
        ...kegiatanData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'anggota') {
      console.log('Pendaftaran anggota:', formData);
      alert('Pendaftaran anggota berhasil dikirim! Kami akan menghubungi Anda segera.');
      setFormData({
        nama: '', email: '', telepon: '', alamat: '', tanggalLahir: '',
        jenisKelamin: '', pendidikan: '', pekerjaan: '', motivasi: ''
      });
    } else {
      console.log('Pendaftaran kegiatan:', kegiatanData);
      alert('Pendaftaran kegiatan berhasil! Konfirmasi akan dikirim ke email Anda.');
      setKegiatanData({ nama: '', email: '', telepon: '', kegiatan: '', catatan: '' });
    }
  };

  const kegiatanTersedia = [
    { id: 'workshop-digital', nama: 'Workshop Digital Marketing', tanggal: '25 Januari 2025' },
    { id: 'futsal', nama: 'Turnamen Futsal Pemuda', tanggal: '2 Februari 2025' },
    { id: 'donor-darah', nama: 'Donor Darah & Kesehatan', tanggal: '10 Februari 2025' },
    { id: 'hidroponik', nama: 'Pelatihan Hidroponik', tanggal: '15 Februari 2025' }
  ];

  const keuntunganAnggota = [
    'Mengikuti semua kegiatan dan program Karang Taruna',
    'Mendapat pelatihan gratis (kewirausahaan, kepemimpinan, dll)',
    'Networking dengan pemuda desa lainnya',
    'Kesempatan mengembangkan bakat dan minat',
    'Berkontribusi dalam pembangunan desa',
    'Sertifikat keikutsertaan dalam program'
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Pendaftaran</h1>
          <p className="text-lg text-gray-600">Bergabunglah dengan Karang Taruna Desa Sejahtera</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('anggota')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === 'anggota'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Users className="h-5 w-5 inline mr-2" />
              Daftar Anggota
            </button>
            <button
              onClick={() => setActiveTab('kegiatan')}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === 'kegiatan'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-700 hover:text-green-600'
              }`}
            >
              <Calendar className="h-5 w-5 inline mr-2" />
              Daftar Kegiatan
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'anggota' ? (
              <div>
                {/* Member Registration Form */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Formulir Pendaftaran Anggota</h2>
                  <p className="text-gray-600 mb-6">
                    Isi formulir berikut untuk menjadi bagian dari Karang Taruna Desa Sejahtera
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={formData.nama}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="nama@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor Telepon *
                      </label>
                      <input
                        type="tel"
                        id="telepon"
                        name="telepon"
                        value={formData.telepon}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="08123456789"
                      />
                    </div>

                    <div>
                      <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Lahir *
                      </label>
                      <input
                        type="date"
                        id="tanggalLahir"
                        name="tanggalLahir"
                        value={formData.tanggalLahir}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Kelamin *
                      </label>
                      <select
                        id="jenisKelamin"
                        name="jenisKelamin"
                        value={formData.jenisKelamin}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Pilih jenis kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="pendidikan" className="block text-sm font-medium text-gray-700 mb-2">
                        Pendidikan Terakhir *
                      </label>
                      <select
                        id="pendidikan"
                        name="pendidikan"
                        value={formData.pendidikan}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      >
                        <option value="">Pilih pendidikan</option>
                        <option value="SD/MI">SD/MI</option>
                        <option value="SMP/MTs">SMP/MTs</option>
                        <option value="SMA/SMK/MA">SMA/SMK/MA</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Sarjana">Sarjana</option>
                        <option value="Magister">Magister</option>
                        <option value="Doktor">Doktor</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="alamat" className="block text-sm font-medium text-gray-700 mb-2">
                      Alamat Lengkap *
                    </label>
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="Jalan, RT/RW, Desa, Kecamatan"
                    />
                  </div>

                  <div>
                    <label htmlFor="pekerjaan" className="block text-sm font-medium text-gray-700 mb-2">
                      Pekerjaan/Status
                    </label>
                    <input
                      type="text"
                      id="pekerjaan"
                      name="pekerjaan"
                      value={formData.pekerjaan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="Pelajar/Mahasiswa/Pekerja/dll"
                    />
                  </div>

                  <div>
                    <label htmlFor="motivasi" className="block text-sm font-medium text-gray-700 mb-2">
                      Motivasi Bergabung *
                    </label>
                    <textarea
                      id="motivasi"
                      name="motivasi"
                      rows={4}
                      value={formData.motivasi}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 resize-none"
                      placeholder="Ceritakan motivasi Anda bergabung dengan Karang Taruna..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Daftar Sebagai Anggota
                  </button>
                </form>

                {/* Benefits */}
                <div className="mt-12 bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Keuntungan Menjadi Anggota</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {keuntunganAnggota.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div>
                {/* Activity Registration Form */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendaftaran Kegiatan</h2>
                  <p className="text-gray-600 mb-6">
                    Daftar untuk mengikuti kegiatan yang diselenggarakan Karang Taruna
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="nama"
                        name="nama"
                        value={kegiatanData.nama}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="Masukkan nama lengkap"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={kegiatanData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telepon" className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="telepon"
                      name="telepon"
                      value={kegiatanData.telepon}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                      placeholder="08123456789"
                    />
                  </div>

                  <div>
                    <label htmlFor="kegiatan" className="block text-sm font-medium text-gray-700 mb-2">
                      Pilih Kegiatan *
                    </label>
                    <select
                      id="kegiatan"
                      name="kegiatan"
                      value={kegiatanData.kegiatan}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                    >
                      <option value="">Pilih kegiatan yang ingin diikuti</option>
                      {kegiatanTersedia.map((kegiatan) => (
                        <option key={kegiatan.id} value={kegiatan.id}>
                          {kegiatan.nama} - {kegiatan.tanggal}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="catatan" className="block text-sm font-medium text-gray-700 mb-2">
                      Catatan Tambahan
                    </label>
                    <textarea
                      id="catatan"
                      name="catatan"
                      rows={3}
                      value={kegiatanData.catatan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 resize-none"
                      placeholder="Tuliskan catatan atau pertanyaan (opsional)"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Daftar Kegiatan
                  </button>
                </form>

                {/* Available Activities */}
                <div className="mt-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Kegiatan Yang Tersedia</h3>
                  <div className="grid gap-4">
                    {kegiatanTersedia.map((kegiatan) => (
                      <div key={kegiatan.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900">{kegiatan.nama}</h4>
                            <p className="text-sm text-gray-600">{kegiatan.tanggal}</p>
                          </div>
                          <Calendar className="h-5 w-5 text-green-600" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-green-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Butuh Bantuan?</h3>
          <p className="mb-6">Hubungi kami jika ada pertanyaan tentang pendaftaran</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@karangtarunsejahtera.id</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Daftar;