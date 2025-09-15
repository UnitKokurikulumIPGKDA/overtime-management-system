import React from 'react';
import Navbar from './components/Navbar';
import OvertimeForm from './components/OvertimeForm';
import LeaveLedger from './components/LeaveLedger';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="max-w-7xl mx-auto p-6">
        <OvertimeForm />
        <LeaveLedger />
      </main>

      <footer className="bg-gray-100 mt-12 py-6 text-center text-gray-600">
        © 2025 Sistem Pengurusan Kerja Lebih Masa - Unit Kokurikulum IPG KDA
      </footer>
    </div>
  );
}

export default App;