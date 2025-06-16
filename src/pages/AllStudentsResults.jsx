import { useState } from 'react';
import { Card, Form, Table } from 'react-bootstrap';
import MainTitle from '../components/MainTitle';
import GetAllResultsHook from '../hook/results/get-all-results';

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

export default function AllStudentsResults() {
    const [searchTerm, setSearchTerm] = useState('');
    const [semesterTerm, setSemesterTerm] = useState('');

    const [onSearch, semester, onChangeSemester, results] = GetAllResultsHook()

    console.log(results)



    
    const filteredStudents = results?.filter(student =>
        (student.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.studentId.includes(searchTerm)) &&
        (semesterTerm === '' || student.semester.toLowerCase().includes(semesterTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <MainTitle title="All Students' Results" />
            <main className="flex-grow container mx-auto px-4 py-8">

                {/* Search Fields */}
                <div className="bg-white rounded-lg shadow p-6 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

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
                                onClick={onSearch}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                            >
                                بحث
                            </button>
                        </div>
                    </div>
                </div>
                <Card className="mb-6">
                    <Card.Body>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <Form.Control
                                    type="text"
                                    placeholder="Search by student name or ID"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="py-2 px-4 w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        {
                            filteredStudents ?
                            <div className="overflow-x-auto">
                                <Table striped bordered hover responsive>
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th>Student ID</th>
                                            <th>Name</th>
                                            <th>Course Name</th>
                                            <th>GPA</th>
                                            <th>Total Credits</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                            {filteredStudents.map((student) => (
                                            <tr key={student.studentId}>
                                                <td>{student.studentId}</td>
                                                <td>{student.studentName}</td>
                                                <td>{student.courseName}</td>
                                                <td>{student.gradeWithSymbol}</td>
                                                <td>{student.grade}</td>


                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                </div> : <div className="flex flex-col items-center justify-center py-16 text-gray-500">
                                    <svg
                                        className="w-16 h-16 mb-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 48 48"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 20h6l2 12h14l2-12h6M16 10h16v6H16z"
                                        />
                                    </svg>
                                    <h2 className="text-xl font-semibold mb-2">No Results Available</h2>
                                    <p className="text-sm text-center text-gray-400 max-w-md">
                                        There are currently no student results matching your search or selected semester.
                                    </p>
                                </div>
                        }
                    </Card.Body>
                </Card>
            </main>
        </div>
    );
}
