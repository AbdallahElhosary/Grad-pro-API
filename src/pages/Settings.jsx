import { useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/actions/settingsAction';

const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Español' },
    { value: 'fr', label: 'Français' },
    { value: 'de', label: 'Deutsch' },
    { value: 'zh', label: '中文' },
];

export default function SettingsPage() {
    const [language, setLanguage] = useState('en');
    const dispatch = useDispatch();
    const darkMode = useSelector(state => state.settings?.darkMode) || false;

    const handleDarkModeToggle = () => {
        dispatch(toggleDarkMode());
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <main className="flex-grow container mx-auto px-4 py-12">
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h1 className="text-4xl font-bold mb-8 text-center" variants={itemVariants}>
                        Settings
                    </motion.h1>
                    <div className={`w-full max-w-md mx-auto p-6 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                        <div className="mb-6">
                            <motion.div className="flex items-center justify-between" variants={itemVariants}>
                                <div>
                                    <label htmlFor="dark-mode" className="text-lg font-medium">Dark Mode</label>
                                    <p className="text-sm text-gray-500">Toggle dark mode on or off</p>
                                </div>
                                <button
                                    onClick={handleDarkModeToggle}
                                    className="p-2 rounded-lg border border-gray-300 bg-gray-200 dark:bg-gray-600"
                                >
                                    {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                                </button>
                            </motion.div>
                        </div>
                        <div>
                            <motion.div className="space-y-2" variants={itemVariants}>
                                <label htmlFor="language" className="text-lg font-medium">Language</label>
                                <select
                                    id="language"
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
                                >
                                    {languages.map((lang) => (
                                        <option key={lang.value} value={lang.value}>
                                            {lang.label}
                                        </option>
                                    ))}
                                </select>
                                <p className="text-sm text-gray-500">Choose your preferred language</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}