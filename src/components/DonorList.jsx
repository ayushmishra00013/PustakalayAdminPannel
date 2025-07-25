import React from 'react';

const DonorList = ({ donors }) => {
  if (!donors) return null;

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-800">दानकर्ताओं की सूची</h2>
        </div>
        {donors.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="text-center text-gray-500 text-lg">कोई दानकर्ता नहीं मिला।</div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white rounded-lg divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">नाम</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">ईमेल</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">कुल दान की पुस्तकें</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {donors.map((donor, idx) => (
                  <tr key={donor.id} className={
                    `transition-colors ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`
                  }>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{donor.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{donor.email || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{donor.donated_books || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonorList;
