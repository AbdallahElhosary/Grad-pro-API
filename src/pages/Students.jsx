import { useState } from 'react';
import MainTitle from '../components/MainTitle';
import { Search } from 'lucide-react';
import GetAllStudentsHook from '../hook/students/get-all-students-hook';
import StudentComponent from '../components/StudentComponent';
import Paginate from '../components/utils/Pagenation/Pagenation';
import { motion } from 'framer-motion'

export default function Students() {
  const [searchQuery, setSearchQuery] = useState('');
  
  

  const [, studentsPagentionAll, pageCount, getPagePagenta, onDelete] = GetAllStudentsHook();

  const filteredStudents = studentsPagentionAll?.studentReadForAdmins?.filter(student =>
    student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.departmentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.studentId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900">
      <MainTitle title="Students List" />
      
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search students..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2  pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
          <Search className="absolute left-1 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Students Table */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">GPA</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Semester</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total Hours</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
              {filteredStudents?.length > 0 ? filteredStudents?.map((student) => (
                <StudentComponent key={student.studentId} student={student} onDelete={onDelete}/>
              )) : (
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
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">No Students Available</h3>
                  <p className="text-gray-600 text-center">There are currently no Students in the system. Check back later or contact your administrator.</p>
                </motion.div>
              ) }
            </tbody>
          </table>
        </div>
          {
            pageCount > 1 ? (
              <Paginate pageCount={pageCount} onPress={getPagePagenta} />
            ) : null
          }
      </div>
    </div>
  );
}



