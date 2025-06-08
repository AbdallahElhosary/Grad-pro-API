import MainTitle from '../components/MainTitle'
import { motion } from 'framer-motion'
import MatrailComponent from '../components/MatrailComponent'
import AllMatrialPageHook from '../hook/matrial/all-matrial-data';
import { Form } from 'react-bootstrap';
import { Search } from "lucide-react"
import Paginate from '../components/utils/Pagenation/Pagenation';


export default function MatrialPage() {
    
    const [, matrialPagentionAll, pageCount, getPagePagenta] = AllMatrialPageHook();


    
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="Available Matrial" />
            <main className="flex-grow container mx-auto px-4 ">
                
                <div className="mb-4 position-relative">
                    <Form.Control
                        type="text"
                        placeholder="Search by material name, code or doctor..."
                        // value={searchTerm}
                        // onChange={(e) => setSearchTerm(e.target.value)}
                        className="ps-4"
                    />
                    <Search className="position-absolute" style={{ top: "10px", left: "5px", color: "#6c757d" }} size={18} />
                </div>

                {matrialPagentionAll?.materials?.length > 0 ? (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {matrialPagentionAll.materials.map((subj) => (
                            <MatrailComponent
                                key={subj.id}
                                name={subj.name}
                                description="Master the principles of effective web design"
                                instructor={subj.instructor}
                                youtubeLink={subj.youtubeLink && subj.youtubeLink}
                                driveLink={subj.driveLink && subj.driveLink}
                            />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-sm"
                    >
                        <div className="w-24 h-24 mb-4 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900">No Materials Available</h3>
                        <p className="text-gray-600 text-center">There are currently no materials in the system. Check back later or contact your administrator.</p>
                    </motion.div>
                )}
            </main>
            {
                pageCount > 1 ? (
                    <Paginate pageCount={pageCount} onPress={getPagePagenta} />
                ) : null
            }


        </div>
    )
}