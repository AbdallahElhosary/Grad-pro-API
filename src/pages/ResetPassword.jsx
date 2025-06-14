'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEyeSlash, FaEye } from "react-icons/fa";
import MainTitle from '../components/MainTitle';
import MainButton from '../components/MainButton';
import { ArrowLeft } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import ResetPasswordHook from '../hook/auth/reset-password-hook';

export default function ResetPasswordPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [
        email,
        onChangeEmail,
        code,
        onChangecode,
        password,
        onChangePassword,
        confirmPassword,
        onChangeConfirmPassword,
        onSubmit,

    ] = ResetPasswordHook()

    const togglePasswordVisibility = () => setShowPassword(!showPassword)
    const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword)

    

    const fadeIn = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100" >
            <MainTitle title="Reset Password" />
            <div className="flex-grow flex  justify-center px-4 py-6 ">
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className='w-5/6 '>
                    <div className=" max-w-lg bg-white shadow-lg rounded-lg p-6 m-auto">
                        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
                        <p className="text-center text-gray-600">Enter your new password</p>
                        <form onSubmit={onSubmit} className="mt-4">
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            id="email"
                                        type="email"
                                        value={email}
                                        onChange={onChangeEmail}
                                        placeholder="m@example.com"
                                            className="w-full border rounded-lg py-2 px-3 text-gray-700"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
                                        <input
                                            id="code"
                                        type="text"
                                        value={code}
                                        onChange={onChangecode}
                                            placeholder="123456"
                                            className="w-full border rounded-lg py-2 px-3 text-gray-700"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">New Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                value={password}
                                                onChange={onChangePassword}
                                                required
                                                className="w-full p-2 border rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                onClick={togglePasswordVisibility}
                                            >
                                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium">Confirm New Password</label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                value={confirmPassword}
                                                onChange={onChangeConfirmPassword}
                                                required
                                                className="w-full p-2 border rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                                onClick={toggleConfirmPasswordVisibility}
                                            >
                                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <MainButton title="Reset Password" />
                            </form>
                        
                        <div className="flex justify-center items-center mt-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            <a href="/auth" className="flex items-center text-sm text-gray-600 hover:text-blue-600">Back to Login</a>
                        </div>
                    </div>
                </motion.div>
            </div>

            <ToastContainer />
        </div>
    )
}
