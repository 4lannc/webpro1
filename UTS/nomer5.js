import React, { useState } from 'react';

// Komponen navigasi
const Navigation = ({ onNavigate }) => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Daftar Produk</h1>
      <div className="flex justify-center space-x-6">
        <button
          onClick={() => onNavigate('home')}
          className="bg-blue-700 hover:bg-blue-600 px-5 py-3 rounded-lg transition duration-300"
        >
          Beranda
        </button>
        <button
          onClick={() => onNavigate('product/1')}
          className="bg-green-700 hover:bg-green-600 px-5 py-3 rounded-lg transition duration-300"
        >
          ES
        </button>
        <button
          onClick={() => onNavigate('product/2')}
          className="bg-green-700 hover:bg-green-600 px-5 py-3 rounded-lg transition duration-300"
        >
          Gorengan..
        </button>
      </div>
    </div>
  );
};

// Komponen halaman beranda
const Home = ({ onNavigate }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Selamat Datang di Warong.Ndeyeng..
      </h1>
      <p className="mt-4 text-gray-600">
        Silakan pilih produk yang anda inginkan..
      </p>
    </div>
  );
};

// Komponen detail produk
const ProductDetail = ({ productId, onNavigate }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800">
        Detail Produk untuk ID: {productId}
      </h1>
      <button
        onClick={() => onNavigate('home')}
        className="mt-4 bg-blue-700 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition duration-300"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

// Aplikasi utama
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Fungsi untuk menangani navigasi
  const handleNavigation = (route) => {
    setCurrentPage(route);
  };

  // Render halaman berdasarkan state currentPage
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={handleNavigation} />;
    }

    if (currentPage.startsWith('product/')) {
      const productId = currentPage.split('/')[1];
      return (
        <ProductDetail productId={productId} onNavigate={handleNavigation} />
      );
    }
  };

  return (
    <div className="container mx-auto">
      <Navigation onNavigate={handleNavigation} />
      <div className="mt-6">{renderPage()}</div>
    </div>
  );
};

export default App;
