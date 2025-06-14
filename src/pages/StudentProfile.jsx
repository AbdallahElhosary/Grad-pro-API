import { useDispatch } from 'react-redux';
import MainTitle from '../components/MainTitle';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaGraduationCap, FaBuilding } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import GetStudentByIdStudent from '../hook/students/get-student-by-id-student';
import img  from "../img/user.png"
const studentData = {
    name: "name",
    studentId: "20210001",
    email: "ahmed.mohamed@example.com",
    phone: "+20 123 456 7890",
    birthDate: "1999-05-15",
    department: "Computer Science",
    gpa: 3.75,
    level: "Fourth Year",
    photo: "https://i.pravatar.cc/300",
    subjects: [
        { name: "Advanced Programming", grade: "A", credits: 4 },
        { name: "Database Systems", grade: "A-", credits: 3 },
        { name: "Computer Networks", grade: "B+", credits: 3 },
        { name: "Artificial Intelligence", grade: "A", credits: 4 },
        { name: "Software Engineering", grade: "B", credits: 4 },
    ],
};

export default function StudentProfile() {

    let studentId = JSON.parse(localStorage.getItem("user")).studentId

    const [studentByID] = GetStudentByIdStudent();
    return (
        <div className="min-h-screen flex flex-col text-gray-900 bg-gray-100">
            <MainTitle title="Student Profile" />
            <main className="container mx-auto px-4 py-6">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Left Section - Photo */}
                        <div className="md:w-1/3 bg-blue-800 p-8 text-center">
                            <div className="mb-6">
                                <img
                                    src={img}
                                    alt="Student IMMAGE"
                                    className="rounded-full w-48 h-48 mx-auto border-4 border-white shadow-lg"
                                />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{studentByID?.studentName}</h2>
                            <p className="text-blue-200 mb-4">{studentByID?.department}</p>
                            <div className="bg-blue-900 rounded-lg p-4 text-center inline-block">
                                <p className="text-blue-200">المعدل التراكمي</p>
                                <p className="text-3xl font-bold text-white">{studentByID?.studentGpa}</p>
                            </div>
                        </div>
                        
                        {/* Right Section - Information */}
                        <div className="md:w-2/3 p-8">
                            <h3 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">المعلومات الشخصية</h3>
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
                                        <p className="text-gray-500">Email </p>
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
                                        <p className="text-gray-500">Student GPA </p>
                                        <p className="font-medium">{studentByID?.studentGpa}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                    <FaGraduationCap className="text-blue-800 w-5 h-5" />
                                    <div>
                                        <p className="text-gray-500">semester</p>
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
                <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-4">Result Details</h3>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-center ">Credits</th>
                                <th className="p-2 text-center">Grade</th>
                                <th className="p-2 text-center">Subject</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.subjects.map((subject, index) => (
                                <tr key={index} className="border-t">
                                    <td className="p-2 text-center">{subject.credits}</td>
                                    <td className="p-2 text-center ">
                                        {subject.grade}
                                    </td>
                                    <td className="p-2 text-center">{subject.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}