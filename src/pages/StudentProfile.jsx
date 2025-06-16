import MainTitle from '../components/MainTitle';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import GetStudentByIdStudent from '../hook/students/get-student-by-id-student';
import img from "../img/user.png";



export default function StudentProfile() {
    let studentId = JSON.parse(localStorage.getItem("user")).studentId;
    const [studentByID] = GetStudentByIdStudent();
    console.log(studentByID)

    return (
        <div className="min-h-screen flex flex-col text-gray-900 bg-gray-100">
            <MainTitle title="Student Profile" />
            <main className="container mx-auto px-4 py-6">
                
                {
                    studentByID?.studentGpa < 2 &&
                    <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded relative shadow-md">
                        <strong className="font-bold">⚠️ Warning: </strong>
                        <span className="block sm:inline">
                            Your GPA is below 2.0. Please consult your academic advisor for assistance.
                        </span>
                    </div>
                }

                


                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Section - Photo */}
                        <div className="md:w-1/3 bg-blue-800 p-8 text-center">
                            <div className="mb-6">
                                <img
                                    src={img}
                                    alt="Student TMMage"
                                    className="rounded-full w-48 h-48 mx-auto border-4 border-white shadow-lg"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{studentByID?.studentName}</h2>
                            <p className="text-blue-200 mb-4">{studentByID?.department}</p>
                            <div className="bg-blue-900 rounded-lg p-4 text-center inline-block">
                                <p className="text-blue-200"> GPA</p>
                                <p className="text-3xl font-bold text-white">{studentByID?.studentGpa.toFixed(2)}</p>
                            </div>
                        </div>

                        {/* Right Section - Information */}
                        <div className="md:w-2/3 p-8">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Persoal info</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaUser className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Student ID</p>
                                        <p className="font-medium">{studentId}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaEnvelope className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Email</p>
                                        <p className="font-medium">{studentByID?.studentEmail}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaPhone className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Phone Number</p>
                                        <p className="font-medium">{studentByID?.phoneNumber}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaCalendar className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Student GPA</p>
                                        <p className="font-medium">{studentByID?.studentGpa.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaGraduationCap className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Semester</p>
                                        <p className="font-medium">{studentByID?.semester}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaGraduationCap className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Total Hours</p>
                                        <p className="font-medium">{studentByID?.totalHours}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaBuilding className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">Department</p>
                                        <p className="font-medium">{studentByID?.departmentName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </main>
        </div>
    );
}
