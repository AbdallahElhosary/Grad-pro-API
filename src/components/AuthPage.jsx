import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import MainTitle from './MainTitle';
import { ToastContainer } from "react-toastify";

import  LoginSignUpHook from '../hook/auth/login-signup-hook';

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);


  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] = LoginSignUpHook();


  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}

      <MainTitle title="Login / Sign up" />
      

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-5/6'
        >
          <div className="bg-white rounded-lg shadow-md w-full max-w-md m-auto">
            {/* Card Header */}
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-center">Welcome</h2>
              <p className="text-sm text-gray-600 text-center">
                Login or create an account to get started
              </p>
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex space-x-4 mb-6">
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${activeTab === 'login'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                    }`}
                  onClick={() => setActiveTab('login')}
                >
                  Login
                </button>
                <button
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${activeTab === 'register'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700'
                    }`}
                  onClick={() => setActiveTab('register')}
                >
                  Register
                </button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                >
                  {activeTab === 'login' ? (
                    <form onSubmit={onSubmit}>
                      <div className="space-y-4">
                        {/* Email Field */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            placeholder="m@example.com"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <div className="relative">
                            <input
                              id="password"
                              value={password}
                              onChange={onChangePassword}
                              type={showPassword ? 'text' : 'password'}
                              required
                              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 rounded-md"
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-4 w-4" />
                              ) : (
                                <EyeIcon className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full mt-6 bg-blue-500 text-white  py-2 rounded-lg hover:bg-blue-700" >
                        Login
                      </button>
                    </form>
                  ) : (
                    <form id="registration-form">
                      <div className="space-y-4">
                        {/* Full Name Field */}
                        <div className="space-y-2">
                          <label htmlFor="register-name" className="block text-sm font-medium text-gray-700">
                            Full Name
                          </label>
                          <input
                            id="register-name"
                            type="text"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                          <label htmlFor="register-email" className="block text-sm font-medium text-gray-700">
                            Email
                          </label>
                          <input
                            id="register-email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        {/* National ID Field */}
                        <div className="space-y-2">
                          <label htmlFor="register-id" className="block text-sm font-medium text-gray-700">
                            National ID
                          </label>
                          <input
                            id="register-id"
                            type="text"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                          <label htmlFor="register-password" className="block text-sm font-medium text-gray-700">
                            Password
                          </label>
                          <div className="relative">
                            <input
                              id="register-password"
                              type={showPassword ? 'text' : 'password'}
                              required
                              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <button
                              type="button"
                              onClick={togglePasswordVisibility}
                              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-gray-100 rounded-md"
                              aria-label={showPassword ? 'Hide password' : 'Show password'}
                            >
                              {showPassword ? (
                                <EyeOffIcon className="h-4 w-4" />
                              ) : (
                                <EyeIcon className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                          <label htmlFor="register-confirm-password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                          </label>
                          <input
                            id="register-confirm-password"
                            type="password"
                            required
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        </div>
                        <button
                          type="submit"
                          className="w-full mt-6 bg-blue-500 text-white  py-2 rounded-lg hover:bg-blue-700" >
                          Register</button>
                      
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card Footer */}
            <div className="p-6 border-t">
              <button className="w-full text-sm text-blue-600 hover:underline">
                Forgot your password?
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}