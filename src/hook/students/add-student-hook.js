import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// قم باستيراد الأكشن الخاص بإضافة طالب، قد تحتاج إلى إنشائه أولاً
import notify from "../useNotify";
import { addStudent } from "../../redux/actions/studentsAction";

const AddStudentHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // The States for Student
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [studentPhoto, setStudentPhoto] = useState(null); // Usually for file uploads
    const [birthDateOfStudent, setBirthDateOfStudent] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [departmentCode, setDepartmentCode] = useState("");

    const [loading, setLoading] = useState(true);

    // OnChange Handlers
    const onChangeStudentId = (e) => {
        setStudentId(e.target.value);
    }
    const onChangeStudentName = (e) => {
        setStudentName(e.target.value);
    }
    const onChangeStudentEmail = (e) => {
        setStudentEmail(e.target.value);
    }
    const onChangeStudentPassword = (e) => {
        setStudentPassword(e.target.value);
    }
    const onChangeStudentPhoto = (e) => {
        // For file inputs, access files array
        setStudentPhoto(e.target.value);
    }
    const onChangeBirthDate = (e) => {
        setBirthDateOfStudent(e.target.value);
    }
    const onChangePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }
    const onChangeDepartmentCode = (e) => {
        setDepartmentCode(e.target.value);
    }

    // On Submit Function
    const onAddStudent = async (e) => {
        e.preventDefault();

        // Validation
        if (studentId === "" || studentName === "" || studentEmail === "" || studentPassword === "" || departmentCode === "") {
            notify("Please Fill Required Fields", "warn");
            return;
        }

        

        setLoading(true);
        // Dispatch the addStudent action with the form data
        await dispatch(addStudent({
            "studentId": studentId,
            "studentName": studentName,
            "studentEmail": studentEmail,
            "studentPassword": studentPassword,
            "studentPhoto": studentPhoto,
            "birthDateOfStudent": birthDateOfStudent,
            "phoneNumber": phoneNumber,
            "departmentCode": departmentCode
          }));
        setLoading(false);
    }


   

    // Get the response from Redux store
    // تأكد من أن هذا المسار صحيح في الـ Redux Reducer الخاص بك
    const res = useSelector((state) => state.students?.addStudent);

    console.log(res);

    // Effect to handle response after submission
    useEffect(() => {
        if (loading === false) {
            if (res) {
                // Assuming 201 (Created) or 200 (OK) for success
                if (res.status === 201 || res.status === 200) {
                    notify("Student Added Successfully", "success");
                    setTimeout(() => {
                        // Navigate to the students list page
                        navigate('/students');
                    }, 1000);
                } else {
                    // Handle specific errors from backend if available
                    const errorMessage = res.data?.message || "There is an error, please try again";
                    notify(errorMessage, "error");
                }
            }
        }
    }, [loading, res, navigate]);

    // Return state and handlers to be used in the component
    return [
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
    ];
}

export default AddStudentHook;