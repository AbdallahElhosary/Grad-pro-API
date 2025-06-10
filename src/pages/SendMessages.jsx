import { useState } from 'react';
import MainTitle from '../components/MainTitle';
import { motion } from 'framer-motion';
import SendMessageHook from '../hook/admin/send-message-hook';
import { ToastContainer } from 'react-toastify';

const CustomInput = ({ value, onChange, placeholder, className }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

const CustomTextArea = ({ value, onChange, placeholder, className }) => (
  <textarea
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows="6"
    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
  />
);

const CustomButton = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors duration-200';
  const variantStyles = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const CustomLabel = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700 mb-1">
    {children}
  </label>
);

const CustomAlert = ({ message, type }) => (
  <div className={`p-4 rounded-md ${type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
    <p className="text-sm">{message}</p>
  </div>
);

export default function SendMessages() {
  

  const [
    subject,
    body,
    onChangeSubject,
    onChangeBody,
    onSendMessage
  ] =SendMessageHook();

  

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <MainTitle title="Send Messages to Students" />
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <form onSubmit={onSendMessage} className="space-y-6">
            <div>
              <CustomLabel htmlFor="subject">Subject</CustomLabel>
              <CustomInput
                id="subject"
                value={subject}
                onChange={onChangeSubject}
                placeholder="Enter message subject"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <CustomLabel htmlFor="body">Message Body</CustomLabel>
              <CustomTextArea
                id="body"
                value={body}
                onChange={onChangeBody}
                placeholder="Enter your message here"
                className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <CustomButton
              type="submit"
              className="w-full flex justify-center items-center"
            >
              Send Message
            </CustomButton>
          </form>
        </motion.div>
      </main>
      <ToastContainer />
    </div>
  );
}