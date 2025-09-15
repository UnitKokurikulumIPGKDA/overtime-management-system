import React from 'react';

const LeaveLedger = () => {
  const entries = [
    {
      id: 1,
      date: "2024-02-24",
      task: "Pegawai Bertugas Gotong Royong",
      totalHours: 9.25,
      expiryDate: "2024-08-24",
      status: "Aktif"
    },
    {
      id: 2,
      date: "2024-03-01",
      task: "Pemeriksaan Keselamatan",
      totalHours: 7.5,
      expiryDate: "2024-09-01",
      status: "Aktif"
    },
    {
      id: 3,
      date: "2023-12-15",
      task: "Latihan CPR",
      totalHours: 6.0,
      expiryDate: "2024-06-15",
      status: "Luput"
    }
  ];

  const totalAccumulated = entries
    .filter(item => item.status === "Aktif")
    .reduce((sum, item) => sum + item.totalHours, 0);

  const expiringSoon = entries.filter(item => 
    item.status === "Aktif" && 
    new Date(item.expiryDate) - new Date() < 7 * 24 * 60 * 60 * 1000
  ).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Imbangan Cuti Gantian</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
          <p className="text-sm text-gray-600">Baki Terkumpul</p>
          <p className="text-2xl font-bold text-blue-800">{totalAccumulated.toFixed(2)} jam</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
          <p className="text-sm text-gray-600">Akan Luput dalam 7 Hari</p>
          <p className="text-2xl font-bold text-yellow-800">{expiringSoon} entri</p>
        </div>
        <div className="bg-gray-50 p-4 rounded border-l-4 border-gray-500">
          <p className="text-sm text-gray-600">Jumlah Rekod</p>
          <p className="text-2xl font-bold text-gray-800">{entries.length}</p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>Tarikh</th>
              <th>Tugasan</th>
              <th>Jam</th>
              <th>Luput Pada</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {entries.map(entry => (
              <tr key={entry.id} className={entry.status === "Luput" ? "opacity-60" : ""}>
                <td>{new Date(entry.date).toLocaleDateString('ms-MY')}</td>
                <td>{entry.task}</td>
                <td>{entry.totalHours.toFixed(2)} jam</td>
                <td>{new Date(entry.expiryDate).toLocaleDateString('ms-MY')}</td>
                <td>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    entry.status === "Aktif" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}>
                    {entry.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveLedger;