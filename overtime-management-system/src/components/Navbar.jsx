import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Sistem Pengurusan Kerja Lebih Masa</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Hai, Pengguna</span>
            <button className="text-red-600 hover:text-red-800 text-sm font-medium">
              Log Keluar
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;