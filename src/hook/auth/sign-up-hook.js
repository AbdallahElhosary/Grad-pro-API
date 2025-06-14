import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../redux/actions/authAction";
import notify from "../useNotify";

const SignUpHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // تعريف الحالات لكل حقل في النموذج
    const [studentId, setStudentId] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentEmail, setStudentEmail] = useState("");
    const [studentPassword, setStudentPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [studentPhoto, setStudentPhoto] = useState(null);
    const [birthDateOfStudent, setBirthDateOfStudent] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [loading, setLoading] = useState(true);
    const [isPress, setIsPress] = useState(false);

    // دوال onChange لتحديث قيمة كل حقل
    const onChangeStudentId = (e) => setStudentId(e.target.value);
    const onChangeStudentName = (e) => setStudentName(e.target.value);
    const onChangeStudentEmail = (e) => setStudentEmail(e.target.value);
    const onChangeStudentPassword = (e) => setStudentPassword(e.target.value);
    const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
    const onChangeStudentPhoto = (e) => setStudentPhoto(e.target.files[0]); // للتعامل مع حقل رفع الملفات
    const onChangeBirthDate = (e) => setBirthDateOfStudent(e.target.value);
    const onChangePhone = (e) => setPhoneNumber(e.target.value);

    // جلب نتيجة إنشاء المستخدم من Redux store
    // تأكد من أن 'createUser' هو اسم الـ state الصحيح في الـ reducer
    
    // دالة الإرسال عند الضغط على زر التسجيل
    const onSubmit = async (e) => {
        e.preventDefault();
        
        // التحقق من صحة المدخلات قبل الإرسال
        if (studentName === "" || studentEmail === "" || studentPassword === "" || phoneNumber === "") {
            notify("please fill the form", "warn");
            return;
        }
        if (studentPassword !== confirmPassword) {
            notify("passwords do not match.", "warn");
            return;
        }
        
        setIsPress(true);
        setLoading(true);

       
        
        // إرسال الأكشن الخاص بإنشاء المستخدم مع البيانات
        await dispatch(createAccount({
            "studentId": studentId,
            "studentName": studentName,
            "studentEmail": studentEmail,
            "studentPassword": studentPassword ,
            "confirmPassword": confirmPassword,
            "studentPhoto": studentPhoto,
            "birthDateOfStudent": birthDateOfStudent,
            "phoneNumber": phoneNumber
          }));
        
        setLoading(false);
        setIsPress(false);
    };
    
    const signupRes = useSelector((state) => state.auth.signup);

    console.log(signupRes)
    // useEffect لمراقبة الاستجابة بعد عملية التسجيل
    useEffect(() => {
        if (loading === false) {
            if (signupRes) {
                // في حالة نجاح التسجيل (الكود 201 يعني 'Created')
                if (signupRes.status === 200) {
                    localStorage.setItem("token", signupRes.data.token)
                    localStorage.setItem("user", JSON.stringify(signupRes.data))
                    notify("Registered successfully", "success");
                    setTimeout(() => {
                        window.location.href = "/"
                    }, 2000);
                    setTimeout(() => {
                        // توجيه المستخدم لصفحة تسجيل الدخول بعد ثانيتين
                        navigate("/");
                    }, 2000);
                } else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                }
                if (signupRes.status === 400) {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    notify("Media data is not valid", "error");
                }
            }
        }
    }, [loading]);

    // إرجاع جميع المتغيرات والدوال التي سيتم استخدامها في واجهة المستخدم
    return [
        studentId,
        studentName,
        studentEmail,
        studentPassword,
        confirmPassword,
        studentPhoto,
        birthDateOfStudent,
        phoneNumber,
        loading,
        onChangeStudentId,
        onChangeStudentName,
        onChangeStudentEmail,
        onChangeStudentPassword,
        onChangeConfirmPassword,
        onChangeStudentPhoto,
        onChangeBirthDate,
        onChangePhone,
        onSubmit,
    ];
};

export default SignUpHook;