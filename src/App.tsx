import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Beranda from './components/Beranda';
import Profil from './components/Profil';
import Program from './components/Program';
import Berita from './components/Berita';
import Galeri from './components/Galeri';
import Kontak from './components/Kontak';
import Daftar from './components/Daftar';

function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  const renderSection = () => {
    switch (activeSection) {
      case 'beranda':
        return <Beranda />;
      case 'profil':
        return <Profil />;
      case 'program':
        return <Program />;
      case 'berita':
        return <Berita />;
      case 'galeri':
        return <Galeri />;
      case 'kontak':
        return <Kontak />;
      case 'daftar':
        return <Daftar />;
      default:
        return <Beranda />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;