import React from 'react';

const BookList = ({ books }) => {
  if (!books) return null;

  return (
    <div className="mt-8 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-full mr-4">
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-blue-800">पुस्तकों की सूची</h2>
        </div>
        {books.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <div className="text-center text-gray-500 text-lg">कोई पुस्तक नहीं मिली।</div>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white rounded-lg divide-y divide-gray-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">पुस्तक का नाम</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">लेखक</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">प्रकाशन वर्ष</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">श्रेणी</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {books.map((book, idx) => (
                  <tr key={book.id} className={
                    `transition-colors ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50`
                  }>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{book.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{book.author || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{book.published_year || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">{book.genre || '-'}</td>
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

export default BookList;
