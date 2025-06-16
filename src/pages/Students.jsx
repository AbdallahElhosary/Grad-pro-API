import { useState } from 'react';
import MainTitle from '../components/MainTitle';
import { Search } from 'lucide-react';
import GetAllStudentsHook from '../hook/students/get-all-students-hook';
import StudentComponent from '../components/StudentComponent';
import Paginate from '../components/utils/Pagenation/Pagenation';

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
              {filteredStudents?.length > 0 && filteredStudents?.map((student) => (
                <StudentComponent key={student.studentId} student={student} onDelete={onDelete}/>
              ))  }
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



