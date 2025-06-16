import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollSubjects, getAvailableCourses, getRecomCourses } from "../../redux/actions/studentsAction";
import notify from "../useNotify";
import { useNavigate } from "react-router";

const GetAvailableRecomCoursesHook = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [selectedSubjects, setSelectedSubjects] = useState([])
    let hours = 0

    let student = JSON.parse(localStorage.getItem("user"));
    
    useEffect(() => {
    
        const run = async () => {
            dispatch(getAvailableCourses(student.studentId));
            await dispatch(getRecomCourses(student.studentId));
        }
    
        run();
    }, [])
    
    const allAvalibleCourses = useSelector((state) => state.students.getAvailableCourses)
    const allRecomCourses = useSelector((state) => state.students.getRecomCourses)
    console.log(allAvalibleCourses)

  
    const allCourseCodes = selectedSubjects.map(course => course.code);

    hours = selectedSubjects.reduce((res, item) => res += item.hoursOfCourse, 0)
    // console.log(hours)
    const onEnroll = async (e) => {
        e.preventDefault();
        
        setLoading(true)
        if (selectedSubjects.length < 3) {
            notify("Please select at least Three subject", "warning")
            return
        }

        

        await dispatch(enrollSubjects({
            "studentId": student.studentId,
            "maxHours": hours || 0,
            "codes": allCourseCodes || []
        }))
        setLoading(false)
        
    }

    const res = useSelector(state => state.students.enrollSubjects);
    console.log(res)


    

    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify(" Subjects Enrolled Successfully", "success");
                    setTimeout(() => {
                        navigate('/')
                    }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])


    
    return [allAvalibleCourses, allRecomCourses, onEnroll, selectedSubjects, setSelectedSubjects]
}

export default GetAvailableRecomCoursesHook
