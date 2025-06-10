'use client'

import { motion } from 'framer-motion'
import { UserPlus } from 'lucide-react'
import MainTitle from '../components/MainTitle'
import { ToastContainer } from 'react-toastify'
import AddAdminHook from '../hook/admin/add-admin-hook'

// Custom Components
const CustomCard = ({ children, className }) => (
  <div className={`bg-white rounded-lg shadow-lg ${className}`}>
    {children}
  </div>
)

const CustomCardHeader = ({ children }) => (
  <div className="p-6 border-b border-gray-200">
    {children}
  </div>
)

const CustomCardTitle = ({ children }) => (
  <h2 className="text-2xl font-semibold text-gray-800">
    {children}
  </h2>
)

const CustomCardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">
    {children}
  </p>
)

const CustomCardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
)

const CustomButton = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200'
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    destructive: 'bg-red-600 text-white hover:bg-red-700',
  }
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

const CustomInput = ({ value, onChange, placeholder, className ,type }) => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
)

const CustomLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
)

export default function AdminManagementPage() {
  

  const [
    name,
    email,
    password,
    confirmPassword,
    code,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangeCode,
    onAddAdmin
  ] = AddAdminHook()

  

 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      <MainTitle title="Admins Management" />
      <main className="flex-grow container mx-auto px-4 py-6 max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div variants={itemVariants}>
            <CustomCard className="mb-8">
              <CustomCardHeader>
                <CustomCardTitle>Add New Admin</CustomCardTitle>
                <CustomCardDescription>Enter the details of the new admin</CustomCardDescription>
              </CustomCardHeader>
              <CustomCardContent>
                <form onSubmit={onAddAdmin} className="space-y-4">
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-name">Name</CustomLabel>
                    <CustomInput
                      id="admin-name"
                      value={name}
                      onChange={onChangeName}
                      placeholder="Enter admin name"
                    />
                  </div>
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-email">Email</CustomLabel>
                    <CustomInput
                      id="admin-email"
                      type="email"
                      value={email}
                      onChange={onChangeEmail}
                      placeholder="Enter admin email"
                    />
                  </div>
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-password">Password</CustomLabel>
                    <CustomInput
                      id="admin-password"
                      type="password"
                      value={password}
                      onChange={onChangePassword}
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-confirm-password">Confirm Password</CustomLabel>
                    <CustomInput
                      id="admin-confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={  onChangeConfirmPassword} 
                      placeholder="Confirm password"
                    />
                  </div>
                  <div className="space-y-2">
                    <CustomLabel htmlFor="admin-code">Admin Code</CustomLabel>
                    <CustomInput
                      id="admin-code"
                      type="text"
                      value={code}
                      onChange={onChangeCode}
                      placeholder="Enter admin code"
                    />
                  </div>
                  <CustomButton type="submit" className="flex justify-center items-center w-full">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Admin
                  </CustomButton>
                  
                </form>
                
              </CustomCardContent>
            </CustomCard>
          </motion.div>
          
        </motion.div>
      </main>
      <ToastContainer />
    </div>
  )
}