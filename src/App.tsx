import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import Profil from './components/Profil';
import Program from './components/Program';
import Berita from './components/Berita';
import ArtikelDetail from './components/ArtikelDetail';
import Galeri from './components/Galeri';
import Kontak from './components/Kontak';
import Daftar from './components/Daftar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/program" element={<Program />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/artikel/:id" element={<ArtikelDetail />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/kontak" element={<Kontak />} />
            <Route path="/daftar" element={<Daftar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;