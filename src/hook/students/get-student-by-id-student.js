import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentById } from "../../redux/actions/studentsAction";

const GetStudentByIdStudent = () => {
    const dispatch = useDispatch();


    let student = JSON.parse(localStorage.getItem("user"));


    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getStudentById(student?.studentId));
    }, [])

    const studentByID = useSelector(state => state.students?.getStudentById);

    console.log(studentByID)

    return [studentByID]
}

export default GetStudentByIdStudent