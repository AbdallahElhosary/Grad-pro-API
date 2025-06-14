import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotify";
import { useNavigate } from "react-router";
import { deleteStudent } from "../../redux/actions/studentsAction";
import GetAllStudentsHook from "./get-all-students-hook";

const DeleteStudentHook = ({ id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)


    // const [allStudents] = GetAllStudentsHook();



    // on delection function

    const onDelete = async (id) => {
        setLoading(true)
        await dispatch(deleteStudent(id))
        setLoading(false)

        
    }

    // console.log(allStudents)

    // const theUpdatedItem = allStudents?.materials?.filter((item) => item.id === id)


    // const onUpdate = async () => {
    //     setLoading(true)
    //     await dispatch(updateMatrial(theUpdatedItem))
    //     setLoading(false)
    // }

    const res = useSelector(state => state.students.deleteStudent);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res.status === 204) {
                notify("Matrial Deleted Successfully", "error")
                setTimeout(() => {
                    // window.location.reload(false)
                }, 2000);
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

    return [onDelete]
}

export default DeleteStudentHook
