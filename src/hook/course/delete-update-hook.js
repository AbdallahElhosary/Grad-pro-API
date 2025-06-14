import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";
import { deleteCourse, updateCourse } from "../../redux/actions/courseAction";

const DeleteUpdateCourseHook = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)





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
            if (res.message === "Course deleted successfuly") {
                notify("Course Deleted Successfully", "success")
                setTimeout(() => {
                    window.location.reload(false)
                }, 2000);
            }
            else {
                notify("Deletion Error", "error")
            }
        }
    }, [loading])


    

    return [onDelete, onUpdate]
}

export default DeleteUpdateCourseHook
