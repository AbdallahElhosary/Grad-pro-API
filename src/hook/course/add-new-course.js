import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import notify from "../useNotify";
import { addCourse } from "../../redux/actions/courseAction";
import AllCoursesPageHook from "./all-courses-hoot";

const AddCourseHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [courseName, setCourseName] = useState("")
    const [courseCode, setCourseCode] = useState("")
    const [coursePreRequest, setCoursePreRequest] = useState([])
    const [courseHours, setCourseHours] = useState("")
    const [courseSemesters, setCourseSemesters] = useState([])
    let [courseDepartments, setCourseDepartments] = useState([])
    const [mandatoryCourse, setMandatoryCourse] = useState(true)


    const [loading, setLoading] = useState(true)

    const [courses] = AllCoursesPageHook()

    console.log(courses)
    

    


    const onSelectPreRequest = (selectedList) => {
        setCoursePreRequest(selectedList)
    }

    const onSelectSemester = (selectedList) => {
        setCoursePreRequest(selectedList)
    }

    const onSelectDepartments = (selectedList) => {
        setCoursePreRequest(selectedList)
    }


    const onChangeName = (e) => {
        setCourseName(e.target.value)
    }
    const onChangeCode = (e) => {
        setCourseCode(e.target.value)

    }
    
    const onChangeHours = (e) => {
        setCourseHours(e.target.value)
    }

    const onChangeSemesters = (e) => {
        const value = `Semester${e.target.value}`;
        setCourseSemesters( (prev) =>
            prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
        );
    };

    const onChangeDepartments = (e) => {
        const value = e.target.value;
        setCourseDepartments((prev) =>
            prev.includes(value) ? prev.filter((d) => d !== value) : [...prev, value]
        );
      };

    
    const onChangeMandatoryCourse = () =>
        setMandatoryCourse((prev) => !prev);

    const onChangePreRequest = (e) => {
        const value = e.target.value;
        setCoursePreRequest((prev) =>
            prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
        );
      };



    const onAddCourse = async (e) => {
        e.preventDefault();
        if (courseName === "" || courseCode === ""  || courseHours === "" || courseSemesters === "" || courseDepartments === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        if (courseHours > 3) {
            notify("Course hours can't be more than 3", "warn")
            return;
        } 
        setLoading(true)

        await dispatch(addCourse({
            "code": courseCode,
            "nameOfCourse": courseName,
            "preRequestCoursesCode": coursePreRequest.map(course => course.code),
            "hoursOfCourse": courseHours,
            "semesters": courseSemesters.map(s => s.nameOfSemester.replace(/\s+/g, '')),
            "departmentIds": courseDepartments.map(dept => dept.departmentCode),
            "mandatoryCourse": mandatoryCourse
        }))
        setLoading(false)

    }

    const res = useSelector((state) => state.courses.addCourse);



    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Course Added Successfully", "success");
                    setTimeout(() => {
                        navigate('/courseManagement')
                    }, 2000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [courses,courseName, onChangeName, courseCode, onChangeCode, coursePreRequest, onChangePreRequest
        , courseHours, onChangeHours
        , courseSemesters, onChangeSemesters
        , courseDepartments, onChangeDepartments
        , mandatoryCourse, onChangeMandatoryCourse, onAddCourse, onSelectPreRequest, onSelectSemester, onSelectDepartments]

}

export default AddCourseHook
