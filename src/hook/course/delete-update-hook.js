import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";
import AllCoursesPageHook from "./all-courses-hoot";
import { useNavigate } from "react-router";
import { deleteCourse, updateCourse } from "../../redux/actions/courseAction";

const DeleteUpdateCourseHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)


    const [courses] = AllCoursesPageHook()



    // on delection function

    const onDelete = async (id) => {
        setLoading(true)
        await dispatch(deleteCourse(id))
        setLoading(false)
    }



    const onUpdate = async () => {
        setLoading(true)
        await dispatch(updateCourse())
        setLoading(false)
    }

    const res = useSelector(state => state.courses.deleteCourse);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res.status === 204) {
                notify("Course Deleted Successfully", "error")
                // setTimeout(() => {
                //     window.location.reload(false)
                // }, 2000);
            }
            else {
                notify("Deletion Error", "error")
            }
        }
    }, [loading])


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Matrial Updated Successfully", "success");
                    // setTimeout(() => {
                    //     navigate('/matrial')
                    // }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [onDelete, onUpdate]
}

export default DeleteUpdateCourseHook
