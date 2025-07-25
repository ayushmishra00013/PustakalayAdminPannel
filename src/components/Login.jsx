import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('admin');

  // Demo credentials
  const DEMO_CREDENTIALS = {
    userId: 'demo_user',
    password: 'smriti123'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    setMessage({ text: '', type: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userId.trim()) newErrors.userId = 'User ID आवश्यक है';
    if (!formData.password.trim()) newErrors.password = 'Password आवश्यक है';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      if (
        formData.userId === DEMO_CREDENTIALS.userId &&
        formData.password === DEMO_CREDENTIALS.password
      ) {
        setMessage({ text: 'Login successful! स्वागत है 🎉', type: 'success' });
        if (onLogin) {
          setTimeout(() => {
            onLogin(formData.userId);
          }, 1500);
        }
      } else {
        setMessage({ text: 'Invalid credentials! कृपया सही User ID और Password डालें।', type: 'error' });
      }
      setIsLoading(false);
    }, 1000);
  };

  const fillDemoCredentials = () => {
    setFormData({
      userId: DEMO_CREDENTIALS.userId,
      password: DEMO_CREDENTIALS.password
    });
    setErrors({});
    setMessage({ text: '', type: '' });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-blue-600 text-white p-10">
        <div className="flex flex-col items-center">
          <svg className="w-16 h-16 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h1 className="text-3xl font-bold mb-2">एडमिन पोर्टल</h1>
          <p className="text-2xl font-semibold">स्मृति पुस्तकालय</p>
        </div>
      </div>
      {/* Right Panel */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-gray-50 p-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Tabs */}
          <div className="flex mb-6 border-b">
            <button
              className={`flex-1 py-2 text-lg font-semibold focus:outline-none border-b-2 border-blue-600 text-blue-600`}
              onClick={() => {}}
            >
              एडमिन लॉगिन
            </button>
          </div>
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                ईमेल पता / यूजर आईडी
              </label>
              <input
                type="text"
                id="userId"
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.userId ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                placeholder="अपना ईमेल दर्ज करें"
                autoComplete="username"
              />
              {errors.userId && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  {errors.userId}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                पासवर्ड
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'}`}
                placeholder="अपना पासवर्ड लिखें"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                मुझे याद रखें (30 दिन)
              </label>
              <a href="#" className="text-blue-600 text-sm hover:underline">पासवर्ड भूल गए?</a>
            </div>
            {message.text && (
              <div className={`p-3 rounded-lg text-center text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message.text}
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'}`}
            >
              {isLoading ? 'लॉगिन कर रहे हैं...' : 'लॉगिन करें'}
            </button>
          </form>
          {/* Demo Credentials */}
          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-blue-700">Demo Credentials</span>
              <button
                onClick={fillDemoCredentials}
                className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
              >
                Use Demo
              </button>
            </div>
            <div className="flex justify-between text-sm">
              <span>User ID:</span>
              <span className="font-mono">{DEMO_CREDENTIALS.userId}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Password:</span>
              <span className="font-mono">{DEMO_CREDENTIALS.password}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">Click "Use Demo" to auto-fill the credentials above</p>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">Powered by SSIPMT, Raipur</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
