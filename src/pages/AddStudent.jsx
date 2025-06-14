import MainTitle from "../components/MainTitle";
import { ToastContainer } from "react-toastify";
import AddStudentHook from "../hook/students/add-student-hook";

function AddStudent() {
    const [
        studentId,
        studentName,
        studentEmail,
        studentPassword,
        birthDateOfStudent,
        phoneNumber,
        departmentCode,
        onChangeStudentId,
        onChangeStudentName,
        onChangeStudentEmail,
        onChangeStudentPassword,
        onChangeStudentPhoto,
        onChangeBirthDate,
        onChangePhoneNumber,
        onChangeDepartmentCode,
        onAddStudent
    ] = AddStudentHook();

    return (
        <div className="min-h-screen flex-col bg-gray-100">
            <MainTitle title="Add Student" />

            <div className="flex justify-center items-center bg-gray-100 w-5/6 m-auto py-4">
                <div className="mx-auto bg-white p-6 rounded-2xl shadow-md w-5/6">
                    <form onSubmit={onAddStudent}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Student ID</label>
                            <input
                                type="number"
                                id="id"
                                value={studentId}
                                onChange={onChangeStudentId}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter student ID"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Student Name</label>
                            <input
                                type="text"
                                id="name"
                                value={studentName}
                                onChange={onChangeStudentName}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter student name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input
                                type="email"
                                value={studentEmail}
                                onChange={onChangeStudentEmail}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter student email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input
                                type="password"
                                value={studentPassword}
                                onChange={onChangeStudentPassword}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter password"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Upload Photo</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={onChangeStudentPhoto}
                                className="w-full p-2 border rounded-lg"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Birth Date</label>
                            <input
                                type="date"
                                value={birthDateOfStudent}
                                onChange={onChangeBirthDate}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Phone Number</label>
                            <input
                                type="text"
                                value={phoneNumber}
                                onChange={onChangePhoneNumber}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="+20 123456789"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700">Department Code</label>
                            <input
                                type="text"
                                value={departmentCode}
                                onChange={onChangeDepartmentCode}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter department code"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                        >
                            Add Student
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
}

export default AddStudent;
