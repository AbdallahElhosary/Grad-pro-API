
const StudentComponent = ({ student ,  onDelete }) => {
    
  return (
      <tr key={student.studentId} className="hover:bg-gray-50 dark:hover:bg-gray-700">
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.studentId}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.studentName}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.studentEmail}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.phoneNumber}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.departmentName}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.studentGpa}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.semester}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">{student.totalHours}</td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-300 mr-3">
                  View
              </button>
              <button onClick={() => onDelete(student.studentId)} className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
                  Delete
              </button>
          </td>
      </tr>
  )
}

export default StudentComponent
