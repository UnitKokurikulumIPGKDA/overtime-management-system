import React, { useState } from 'react';

const OvertimeForm = () => {
  const [date, setDate] = useState('');
  const [task, setTask] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalHours, setTotalHours] = useState(0);

  const calculateHours = () => {
    if (!startTime || !endTime) return 0;

    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);

    let total = (endHour * 60 + endMin) - (startHour * 60 + startMin);
    total = total / 60;

    const day = new Date(date).getDay();
    const maxAllowed = [0,1,2,3].includes(day) ? 9 : 7.5;

    if (total > maxAllowed) {
      alert(`Maksimum jam kerja lebih masa pada hari ini ialah ${maxAllowed} jam.`);
      return 0;
    }

    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hours = calculateHours();
    if (hours <= 0) return;

    setTotalHours(hours);
    alert(`Berjaya direkodkan: ${hours.toFixed(2)} jam`);
    
    setStartTime('');
    setEndTime('');
    setTask('');
    setDate('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Rekod Kerja Lebih Masa</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tarikh</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Tugasan</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Contoh: Pegawai Bertugas Gotong Royong"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mula (HH:MM)</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Akhir (HH:MM)</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="primary w-full md:w-auto mt-4"
          >
            Rekod Kerja Lebih Masa
          </button>
        </div>
      </form>

      {totalHours > 0 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="text-green-800"><strong>Jumlah Jam:</strong> {totalHours.toFixed(2)} jam</p>
        </div>
      )}
    </div>
  );
};

export default OvertimeForm;