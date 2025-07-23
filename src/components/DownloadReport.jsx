import React from 'react';

const DownloadReport = ({ donors, books }) => {
  const downloadPDF = () => {
    // UI functionality - will show alert for now
    alert('PDF डाउनलोड फ़ंक्शन यहाँ होगा। यह केवल UI है।');
  };

  const downloadExcel = () => {
    // UI functionality - will show alert for now
    alert('Excel डाउनलोड फ़ंक्शन यहाँ होगा। यह केवल UI है।');
  };

  const downloadDonorReport = () => {
    alert('दानकर्ता रिपोर्ट डाउनलोड फ़ंक्शन यहाँ होगा।');
  };

  const downloadBookReport = () => {
    alert('पुस्तक रिपोर्ट डाउनलोड फ़ंक्शन यहाँ होगा।');
  };

  const totalBooks = books.reduce((sum, book) => sum + book.quantityDonated, 0);
  const availableBooks = books.reduce((sum, book) => sum + book.currentAvailability, 0);
  const approvedDonors = donors.filter(donor => donor.status === 'approved').length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        रिपोर्ट डाउनलोड करें
      </h3>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-primary-800">कुल दानकर्ता</p>
              <p className="text-2xl font-semibold text-primary-900">{donors.length}</p>
              <p className="text-xs text-primary-700">स्वीकृत: {approvedDonors}</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-secondary-800">कुल पुस्तकें</p>
              <p className="text-2xl font-semibold text-secondary-900">{totalBooks}</p>
              <p className="text-xs text-secondary-700">विभिन्न श्रेणियों में</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-4 rounded-lg">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-accent-800">उपलब्ध पुस्तकें</p>
              <p className="text-2xl font-semibold text-accent-900">{availableBooks}</p>
              <p className="text-xs text-accent-700">वर्तमान स्टॉक</p>
            </div>
          </div>
        </div>
      </div>

      {/* Download Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* General Reports */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-gray-700 border-b border-gray-200 pb-2">
            सामान्य रिपोर्ट
          </h4>
          
          <button
            onClick={downloadPDF}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors hover-scale"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            संपूर्ण रिपोर्ट PDF में डाउनलोड करें
          </button>

          <button
            onClick={downloadExcel}
            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors hover-scale"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            संपूर्ण डेटा Excel में डाउनलोड करें
          </button>
        </div>

        {/* Specific Reports */}
        <div className="space-y-4">
          <h4 className="text-md font-medium text-gray-700 border-b border-gray-200 pb-2">
            विशिष्ट रिपोर्ट
          </h4>
          
          <button
            onClick={downloadDonorReport}
            className="w-full flex items-center justify-center px-4 py-3 border border-primary-300 text-sm font-medium rounded-lg text-primary-700 bg-primary-50 hover:bg-primary-100 transition-colors hover-scale"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            केवल दानकर्ता रिपोर्ट
          </button>

          <button
            onClick={downloadBookReport}
            className="w-full flex items-center justify-center px-4 py-3 border border-secondary-300 text-sm font-medium rounded-lg text-secondary-700 bg-secondary-50 hover:bg-secondary-100 transition-colors hover-scale"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            केवल पुस्तक रिपोर्ट
          </button>
        </div>
      </div>

      {/* Note */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>नोट:</strong> यह केवल UI डेमो है। वास्तविक डाउनलोड फ़ंक्शन बैकएंड इंटीग्रेशन के साथ जोड़ा जाएगा।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
