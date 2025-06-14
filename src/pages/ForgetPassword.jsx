import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import MainTitle from '../components/MainTitle'
import MainButton from '../components/MainButton'
import ForgetPasswordHook from '../hook/auth/forget-password-hook'
import { ToastContainer } from 'react-toastify'

export default function ForgotPasswordPage() {


    const [email, onChangeEmail, onSubmit] = ForgetPasswordHook()



    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="Forget Password" />
            <div className="flex-grow flex  justify-center px-4 py-6">
                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
                        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
                        <p className="text-center text-gray-500">Enter your email to reset your password</p>
                        <form onSubmit={onSubmit} className="mt-4">
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={email}
                                    onChange={onChangeEmail}
                                    className="w-full border rounded-lg py-2 px-3 text-gray-700"
                                    required
                                />
                            </div>
                            <MainButton title="Reset Password" />
                        </form>
                        <div className="flex justify-center mt-4">
                            <a href="/login" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Login
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <ToastContainer />
        </div>
    )
}