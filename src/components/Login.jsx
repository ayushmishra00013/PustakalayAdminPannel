import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

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
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Clear previous messages
    setMessage({ text: '', type: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.userId.trim()) {
      newErrors.userId = 'User ID आवश्यक है';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password आवश्यक है';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      // Check credentials
      if (formData.userId === DEMO_CREDENTIALS.userId && 
          formData.password === DEMO_CREDENTIALS.password) {
        setMessage({ 
          text: 'Login successful! स्वागत है 🎉', 
          type: 'success' 
        });
        
        // If onLogin callback is provided, call it after a delay
        if (onLogin) {
          setTimeout(() => {
            onLogin(formData.userId);
          }, 1500);
        }
      } else {
        setMessage({ 
          text: 'Invalid credentials! कृपया सही User ID और Password डालें।', 
          type: 'error' 
        });
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
    <div className="min-h-screen bg-gradient-to-br from-primary-100 via-secondary-50 to-accent-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="gradient-bg px-8 py-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-white p-4 rounded-full shadow-lg">
                <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">स्मृति पुस्तकालय</h1>
            <p className="text-white text-opacity-90 text-sm">Admin Dashboard Login</p>
          </div>

          {/* Login Form */}
          <div className="px-8 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User ID Field */}
              <div>
                <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  User ID
                </label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  value={formData.userId}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.userId 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="अपना User ID दर्ज करें"
                  autoComplete="username"
                />
                {errors.userId && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.userId}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  <svg className="w-4 h-4 inline mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.password 
                      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="अपना Password दर्ज करें"
                  autoComplete="current-password"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Message Display */}
              {message.text && (
                <div className={`p-4 rounded-lg flex items-center ${
                  message.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-800' 
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}>
                  {message.type === 'success' ? (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-sm">{message.text}</span>
                </div>
              )}

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-primary-600 hover:bg-primary-700 hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Logging in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login करें
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Demo Credentials Card */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Demo Credentials
            </h3>
            <button
              onClick={fillDemoCredentials}
              className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
            >
              Use Demo
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">User ID:</span>
              <code className="text-sm bg-white px-2 py-1 rounded border text-primary-700 font-mono">
                {DEMO_CREDENTIALS.userId}
              </code>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-600">Password:</span>
              <code className="text-sm bg-white px-2 py-1 rounded border text-primary-700 font-mono">
                {DEMO_CREDENTIALS.password}
              </code>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-3 text-center">
            Click "Use Demo" to auto-fill the credentials above
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            © 2024 स्मृति पुस्तकालय - Admin Portal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
