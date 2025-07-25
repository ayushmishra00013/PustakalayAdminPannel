import React, { useState, useMemo, useEffect } from 'react';
import './styles/tailwind.css';
import { donorsData } from './data/dummyData';
import { fetchBooks, fetchDonors } from './data/api';
import FilterPanel from './components/FilterPanel';
import DonorList from './components/DonorList';
import BookList from './components/BookList';
import DownloadReport from './components/DownloadReport';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('donors');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [dateFilter, setDateFilter] = useState({ start: '', end: '' });
  const [donors, setDonors] = useState([]);
  const [books, setBooks] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true);
  const [booksError, setBooksError] = useState(null);

  // Fetch donors from backend
  useEffect(() => {
    fetchDonors()
      .then(setDonors)
      .catch(() => setDonors([]));
  }, []);

  // Fetch books from backend
  useEffect(() => {
    setBooksLoading(true);
    fetchBooks()
      .then(setBooks)
      .catch(err => setBooksError(err.message))
      .finally(() => setBooksLoading(false));
  }, []);

  // Filter functions
  const filteredDonors = useMemo(() => {
    return donors.filter(donor => {
      const matchesSearch = donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (donor.contact && donor.contact.includes(searchTerm));
      const matchesCategory = !categoryFilter || (donor.category === categoryFilter);
      const matchesDate = (!dateFilter.start || new Date(donor.donationDate) >= new Date(dateFilter.start)) &&
        (!dateFilter.end || new Date(donor.donationDate) <= new Date(dateFilter.end));
      return matchesSearch && matchesCategory && matchesDate;
    });
  }, [donors, searchTerm, categoryFilter, dateFilter]);

  const filteredBooks = useMemo(() => {
    return books.filter(book => {
      const matchesSearch =
        (book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = !categoryFilter || (book.genre === categoryFilter);
      // No date filter for now (unless you want to filter by published_year)
      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, categoryFilter]);

  // Handler functions
  const handleLogin = (userId) => {
    setIsLoggedIn(true);
    setCurrentUser(userId);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setActiveTab('donors');
    setSearchTerm('');
    setCategoryFilter('');
    setDateFilter({ start: '', end: '' });
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (type, value) => {
    if (type === 'category') {
      setCategoryFilter(value);
    }
  };

  const handleDateFilter = (start, end) => {
    setDateFilter({ start, end });
  };

  const handleEdit = (id) => {
    alert(`संपादन फ़ंक्शन: ID ${id} के लिए। यह बैकएंड के साथ जोड़ा जाएगा।`);
  };

  const handleDelete = (id) => {
    if (window.confirm('क्या आप वाकई इसे हटाना चाहते हैं?')) {
      if (activeTab === 'donors') {
        setDonors(prev => prev.filter(donor => donor.id !== id));
      } else {
        setBooks(prev => prev.filter(book => book.id !== id));
      }
    }
  };

  const handleApprove = (id, currentStatus) => {
    const newStatus = currentStatus === 'approved' ? 'pending' : 'approved';
    setDonors(prev => prev.map(donor => 
      donor.id === id ? { ...donor, status: newStatus } : donor
    ));
  };

  const tabs = [
    { id: 'donors', name: 'दानकर्ता', icon: '👥' },
    { id: 'books', name: 'पुस्तकें', icon: '📚' },
    { id: 'reports', name: 'रिपोर्ट', icon: '📊' }
  ];

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="gradient-bg shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="text-white">
                <h1 className="text-2xl font-bold">स्मृति पुस्तकालय</h1>
                <p className="text-sm opacity-90">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm text-right">
                <p className="font-medium">Welcome, {currentUser}</p>
                <p className="opacity-75">Admin User</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleLogout}
                  className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-colors"
                  title="Logout"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-sm border-b border-gray-200 w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex flex-wrap space-x-2 sm:space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 sm:py-4 px-2 sm:px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 w-full">
        {/* Filter Panel - Show only for donors and books tabs */}
        {(activeTab === 'donors' || activeTab === 'books') && (
          <FilterPanel
            onSearch={handleSearch}
            onFilter={handleFilter}
            onDateFilter={handleDateFilter}
            categoryFilter={categoryFilter}
          />
        )}

        {/* Content based on active tab */}
        {activeTab === 'donors' && (
          <DonorList
            donors={filteredDonors}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onApprove={handleApprove}
          />
        )}

        {activeTab === 'books' && (
          booksLoading ? (
            <div className="text-center py-8 text-lg">Loading books...</div>
          ) : booksError ? (
            <div className="text-center py-8 text-red-600">Error: {booksError}</div>
          ) : (
            <BookList books={filteredBooks} />
          )
        )}

        {activeTab === 'reports' && (
          <DownloadReport donors={donors} books={books} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              © 2024 स्मृति पुस्तकालय। सभी अधिकार सुरक्षित।
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Version 1.0</span>
              <span>•</span>
              <span>Admin Dashboard</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
