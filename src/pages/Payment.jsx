'use client'

import { motion } from 'framer-motion'
import { CreditCard } from 'lucide-react'
import MainTitle from '../components/MainTitle'
export default function PaymentPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MainTitle title="Payment" />
      <main className="flex-grow container mx-auto px-4 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 space-y-6">
              {/* صورة الدفع */}
              <motion.div variants={contentVariants}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
                  alt="Payment"
                  className="rounded-lg object-cover w-full"
                  style={{ height: '400px', width: '800px' }}
                />
              </motion.div>

              {/* محتوى نصي */}
              <motion.div variants={contentVariants} className="space-y-4">
                <p className="text-lg text-gray-700">
                  Secure and easy payments for your university fees and services.
                  Our online payment system allows you to pay using various methods,
                  ensuring a seamless experience.
                </p>
              </motion.div>

              {/* زر الدفع */}
              <motion.div variants={contentVariants} className="flex justify-center">
                <a
                  href="https://www.atfawry.com/atfawry/plugin/auth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex no-underline items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <CreditCard className="mr-2 h-4 w-4" /> Go to Payment Portal
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
