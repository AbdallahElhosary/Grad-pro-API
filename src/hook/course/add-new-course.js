import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addMatrial } from "../../redux/actions/matrialAction";
import notify from "../useNotify";
import { addCourse } from "../../redux/actions/courseAction";

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



    const onChangeName = (e) => {
        setCourseName(e.target.value)
        console.log("Name " , e.target.value)
    }
    const onChangeCode = (e) => {
        setCourseCode(e.target.value)
        console.log("Code ", e.target.value)

    }
    const onChangePreRequest = (e) => {
        console.log("PreRequest " ,e.target.value)
        setCoursePreRequest(e.target.value)
    }
    const onChangeHours = (e) => {
        setCourseHours(e.target.value)
        console.log("Hours" , e.target.value )
    }

    const onChangeDepartments = (e) => {
        courseDepartments.find(item => item === e.target.value) ? courseDepartments = courseDepartments.filter(item => item !== e.target.value) : courseDepartments.push(e.target.value)
        courseDepartments = [...new Set(courseDepartments)]

        setCourseDepartments(courseDepartments)
        console.log("Depatments", courseDepartments)
    } 


    const onChangeSemesters = (e) => {
        courseSemesters.push(e.target.value)
        // console.log("Semesters", courseSemesters)
    }
    const onChangeMandatoryCourse = (e) => {
        setMandatoryCourse(!mandatoryCourse)
        console.log(mandatoryCourse)
    }




    const onAddCourse = async (e) => {
        e.preventDefault();
        if (courseName === "" || courseCode === ""  || courseHours === "" || courseSemesters === "" || courseDepartments === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(addCourse({
            "code": courseCode,
            "nameOfCourse": courseName,
            "preRequestCoursesCode": coursePreRequest,
            "hoursOfCourse": courseHours,
            "semesters": courseSemesters,
            "departmentIds": courseDepartments,
            "mandatoryCourse": mandatoryCourse
        }))
        setLoading(false)

    }

    const res = useSelector((state) => state.courses.addCourse);

    console.log(res)


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

    return [courseName, onChangeName, courseCode, onChangeCode, coursePreRequest, onChangePreRequest
        , courseHours, onChangeHours
        , courseSemesters, onChangeSemesters
        , courseDepartments, onChangeDepartments
        , mandatoryCourse, onChangeMandatoryCourse, onAddCourse]

}

export default AddCourseHook
