import React, { useState } from 'react';

// Atom: Input
const InputAtom = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
};

// Atom: Button
const ButtonAtom = ({ children, onClick, className = '', type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg px-6 py-2 hover:from-blue-600 hover:to-blue-800 shadow-lg transform hover:scale-105 transition-transform duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

// Molecule: Simple Form
const InputFormMolecule = ({ onSubmit, label }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue(''); // Reset input setelah submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <h2 className="text-2xl mb-4 font-bold text-gray-700">{label}</h2>
      <div className="flex space-x-3">
        <InputAtom
          placeholder="Masukkan teks di sini..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow"
        />
        <ButtonAtom type="submit">Kirim</ButtonAtom>
      </div>
    </form>
  );
};

// Contoh penggunaan di App
const App = () => {
  const [submittedItems, setSubmittedItems] = useState([]);

  const handleFormSubmit = (value) => {
    if (value.trim()) {
      setSubmittedItems([...submittedItems, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
      <InputFormMolecule
        label="Form Penagih Hutang.."
        onSubmit={handleFormSubmit}
      />

      {/* Menampilkan daftar item yang disubmit */}
      <div className="mt-8 max-w-md mx-auto">
        {submittedItems.length > 0 ? (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Daftar Item:
            </h3>
            <ul className="list-disc pl-6 text-gray-700">
              {submittedItems.map((item, index) => (
                <li
                  key={index}
                  className="mb-2 hover:font-bold hover:text-blue-600 transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-center text-gray-500 italic">
            Daftar kosong.. Mohon Tambahkan item untuk memulai!
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
