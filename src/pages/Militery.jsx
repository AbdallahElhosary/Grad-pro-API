'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import militeryImg from "../img/military.jpg"
import MainTitle from '../components/MainTitle'
export default function MilitaryEducationPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
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
      <MainTitle title="Military" /> 
      <main className="flex-grow container mx-auto px-4 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card Replacement */}
          <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            

            {/* Card Content Replacement */}
            <div className="p-6 space-y-6">
              {/* Image Replacement */}
              <motion.div variants={contentVariants}>
                <img
                  src={militeryImg}
                  alt="Military Education"
                  className="rounded-lg object-cover w-full"
                  style={{ height: '400px', width: '800px' }}
                />
              </motion.div>

              {/* Text Content */}
              <motion.div variants={contentVariants} className="space-y-4">
                <p className="text-lg text-gray-700">
                  Military Education is an essential component of the educational curriculum in many countries,
                  aimed at instilling discipline, patriotism, and a sense of duty among students.
                </p>
                
              </motion.div>

              {/* Button Replacement */}
              <motion.div variants={contentVariants} className="flex justify-center">
                <a
                  href="https://military.bu.edu.eg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex no-underline items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Globe className="mr-2 h-4 w-4" /> Visit Official Website
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}