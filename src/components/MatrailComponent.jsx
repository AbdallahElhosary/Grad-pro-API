
import { motion } from 'framer-motion'
import { Book, User, Youtube, FileText } from 'lucide-react'




const MatrailComponent = ({ id, name, description, instructor, youtube, drive }) => {


    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        },
        hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }
    }

    const instructorVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
    }
    return (

        <motion.div
            key={id}
            variants={cardVariants}
            whileHover="hover"
            className="transform transition-all duration-300 hover:translate-y-[-4px]"
        >
            <div
                className="h-full flex flex-col justify-between bg-white rounded-xl shadow-lg p-6 border border-gray-100"
            >
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="flex items-center text-xl font-bold text-gray-800">
                            <Book className="w-6 h-6 mr-3 text-blue-500" />
                            {name}
                        </h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{description}</p>
                    <motion.div
                        variants={instructorVariants}
                        className="flex items-center text-sm text-gray-500 bg-gray-50 p-3 rounded-lg"
                    >
                        <User className="w-5 h-5 mr-2 text-gray-400" />
                        <span className="font-medium">{instructor}</span>
                    </motion.div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <a href={youtube && youtube} aria-disabled ={!youtube} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                        <button className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 shadow-sm">
                            <Youtube className="w-5 h-5 mr-2" />
                            YouTube
                        </button>
                    </a>
                    <a href={drive} target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/2 no-underline">
                        <button className="w-full flex items-center justify-center px-4 py-2.5 rounded-lg text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 shadow-sm">
                            <FileText className="w-5 h-5 mr-2" />
                            Drive
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default MatrailComponent
