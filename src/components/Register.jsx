import { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import MainTitle from './MainTitle';
import { ToastContainer } from "react-toastify";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MainTitle title="Register" />

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-5/6'
        >
          <div className="bg-white rounded-lg shadow-md w-full max-w-md m-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-center">Create Account</h2>
              <p className="text-sm text-gray-600 text-center">
                Register to get started with our services
              </p>
            </div>

            <div className="p-6">
              <form id="registration-form" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Student ID Field */}
                  <div className="space-y-2">
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                      Student ID
                    </label>
                    <input
                      id="studentId"
                      type="text"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Student Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="studentEmail" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="studentEmail"
                      type="email"
                      required
                      placeholder="student@example.com"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Birth Date Field */}
                  <div className="space-y-2">
                    <label htmlFor="birthDateOfStudent" className="block text-sm font-medium text-gray-700">
                      Birth Date
                    </label>
                    <input
                      id="birthDateOfStudent"
                      type="date"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Photo Upload Field */}
                  <div className="space-y-2">
                    <label htmlFor="studentPhoto" className="block text-sm font-medium text-gray-700">
                      Profile Photo
                    </label>
                    <input
                      id="studentPhoto"
                      type="file"
                      accept="image/*"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="studentPassword" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="studentPassword"
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
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Confirm Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      required
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Register
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                      Login here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  );
}