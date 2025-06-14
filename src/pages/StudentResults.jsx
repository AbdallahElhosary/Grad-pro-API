import React from 'react';
import MainTitle from '../components/MainTitle';
import { FaGraduationCap, FaAward, FaStar } from 'react-icons/fa';

const studentResults = {
    name: "أحمد محمد",
    studentId: "20210001",
    semester: "الفصل الدراسي الأول 2024-2023",
    gpa: 3.75,
    totalCredits: 18,
    subjects: [
        { name: "البرمجة المتقدمة", grade: "A", credits: 4, percentage: 95 },
        { name: "قواعد البيانات", grade: "A-", credits: 3, percentage: 90 },
        { name: "شبكات الحاسب", grade: "B+", credits: 3, percentage: 87 },
        { name: "الذكاء الاصطناعي", grade: "A", credits: 4, percentage: 93 },
        { name: "هندسة البرمجيات", grade: "B", credits: 4, percentage: 85 },
    ],
};

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
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <MainTitle title="نتائج الطالب" />
            <main className="container mx-auto px-4 py-8">
                {/* Student Info Card */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{studentResults.name}</h2>
                        <p className="text-gray-600">{studentResults.studentId}</p>
                        <p className="text-blue-600 font-semibold mt-2">{studentResults.semester}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white text-center">
                            <FaGraduationCap className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-lg font-semibold mb-2">المعدل التراكمي</p>
                            <p className="text-3xl font-bold">{studentResults.gpa}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white text-center">
                            <FaAward className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-lg font-semibold mb-2">الساعات المعتمدة</p>
                            <p className="text-3xl font-bold">{studentResults.totalCredits}</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white text-center">
                            <FaStar className="w-8 h-8 mx-auto mb-4" />
                            <p className="text-lg font-semibold mb-2">التقدير العام</p>
                            <p className="text-3xl font-bold">ممتاز</p>
                        </div>
                    </div>
                </div>

                {/* Results Table */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">تفاصيل النتائج</h3>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-gray-50 text-right">
                                        <th className="px-6 py-3 text-gray-600 font-semibold">المادة</th>
                                        <th className="px-6 py-3 text-gray-600 font-semibold text-center">الدرجة</th>
                                        <th className="px-6 py-3 text-gray-600 font-semibold text-center">النسبة المئوية</th>
                                        <th className="px-6 py-3 text-gray-600 font-semibold text-center">الساعات المعتمدة</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentResults.subjects.map((subject, index) => (
                                        <tr key={index} className="border-t hover:bg-gray-50">
                                            <td className="px-6 py-4 text-gray-800">{subject.name}</td>
                                            <td className="px-6 py-4 text-center">
                                                <span className={`inline-block ${gradeColors[subject.grade]} text-white rounded-full px-3 py-1 text-sm font-semibold`}>
                                                    {subject.grade}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <div className="flex items-center justify-center">
                                                    <div className="w-full bg-gray-200 rounded-full h-2.5 max-w-[150px]">
                                                        <div
                                                            className="bg-blue-600 h-2.5 rounded-full"
                                                            style={{ width: `${subject.percentage}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="mr-2 text-gray-600">{subject.percentage}%</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-gray-800 text-center">{subject.credits}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}