import { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import MainTitle from './MainTitle';
import { ToastContainer } from "react-toastify";
import LoginSignUpHook from '../hook/auth/login-signup-hook';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const [email, password, , onChangeEmail, onChangePassword, onSubmit] = LoginSignUpHook();

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <MainTitle title="Login" />

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className='w-5/6'
        >
          <div className="bg-white rounded-lg shadow-md w-full max-w-md m-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-center">Welcome Back</h2>
              <p className="text-sm text-gray-600 text-center">
                Login to access your account
              </p>
            </div>

            <div className="p-6">
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
                  className="w-full mt-6 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Login
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
                      Register here
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <a href="/auth/forgetPassword" className="text-blue-600 hover:text-blue-800 font-medium">
                      Forgot your password?
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