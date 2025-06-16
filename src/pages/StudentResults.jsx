import MainTitle from '../components/MainTitle';
import GetResultForSpecificStudent from '../hook/results/get-result-for-specific-student';

const semesters = [
    { label: "Semester 1", value: "Semester1" },
    { label: "Semester 2", value: "Semester2" },
    { label: "Semester 3", value: "Semester3" },
    { label: "Semester 4", value: "Semester4" },
    { label: "Semester 5", value: "Semester5" },
    { label: "Semester 6", value: "Semester6" },
    { label: "Semester 7", value: "Semester7" },
    { label: "Semester 8", value: "Semester8" },
];



const gradeColors = {
    'A': 'bg-green-500',
    'A-': 'bg-green-400',
    'B+': 'bg-blue-500',
    'B': 'bg-blue-400',
    'B-': 'bg-blue-300',
    'C+': 'bg-yellow-500',
    'C': 'bg-yellow-400',
    'C-': 'bg-yellow-300',
    'D+': 'bg-orange-500',
    'D': 'bg-orange-400',
    'F': 'bg-red-500',
};

export default function StudentResults() {



    const [studentId, onChangeStudentId, semester, onChangeSemester, onAddDocument, StudentResult] = GetResultForSpecificStudent()
    console.log(StudentResult)

    

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <MainTitle title="Student Result" />

            <main className="container mx-auto px-4 py-8">

                {/* Search Fields */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Student ID</label>
                            <input
                                type="text"
                                value={studentId}
                                onChange={onChangeStudentId}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                                placeholder="Enter Student ID"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2 font-medium">Semester</label>
                            <select
                                value={semester}
                                onChange={onChangeSemester}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
                            >
                                {semesters.map((s, idx) => (
                                    <option key={idx} value={s.value}>{s.label}</option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                onClick={onAddDocument}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                            >
                                بحث
                            </button>
                        </div>
                    </div>
                </div>

                {/* Student Info Card */}
                {
                    StudentResult &&
                    <><div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <div className="text-center flex justify-center items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">{StudentResult[0]?.studentName}</h2>
                        </div>

                        
                    </div>
                        {/* Results Table */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-6">Result Details</h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50">
                                                <th className="px-6 py-3 text-gray-600 font-semibold">Subject</th>
                                                <th className="px-6 py-3 text-gray-600 font-semibold text-center">Grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {StudentResult.map((subject, index) => (
                                                <tr key={index} className="border-t hover:bg-gray-50">
                                                    <td className="px-6 py-4 text-gray-800">{subject.courseName}</td>
                                                    <td className="px-6 py-4 text-center">
                                                        <span className={`inline-block ${gradeColors[subject.grade]} text-white rounded-full px-3 py-1 text-sm font-semibold`}>
                                                            {subject.grade}
                                                        </span>
                                                    </td>
                                                    
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div></>
                }



            </main>
        </div>
    );
}
