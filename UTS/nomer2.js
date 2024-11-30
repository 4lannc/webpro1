// App.js
import React from 'react';
import TombolPenghitung from './TombolPenghitung';

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      gap: '20px' 
    }}>
      <TombolPenghitung judul="Penghitung Klik Pertama" />
      <TombolPenghitung judul="Penghitung Klik Kedua" />
    </div>
  );
}

export default App;

// TombolPenghitung.js
import React, { useState } from 'react';

const TombolPenghitung = ({ judul }) => {
  const [jumlahKlik, setJumlahKlik] = useState(0);

  const handleKlik = () => {
    setJumlahKlik(jumlahKlik + 1);
  };

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f0f0f0', 
      borderRadius: '10px', 
      textAlign: 'center' 
    }}>
      <h2 style={{ marginBottom: '10px' }}>{judul}</h2>
      <button 
        onClick={handleKlik}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Klik saya: {jumlahKlik} kali
      </button>
    </div>
  );
};

export default TombolPenghitung;

// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);