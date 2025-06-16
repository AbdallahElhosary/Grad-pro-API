import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import notify from '../useNotify';
import { getSpecificResult } from '../../redux/actions/resultAction';

const GetResultForSpecificStudent = () => {
    const dispatch = useDispatch();
    // The States
    const [studentId, setStudentId] = useState("")
    const [semester, setSemester] = useState("Semester1")
    const [loading, setLoading] = useState(true)



    const onChangeStudentId = (e) => {
        setStudentId(e.target.value)
    }
    const onChangeSemester = (e) => {
        setSemester(e.target.value)
        console.log(e.target.value)
    }


    const onAddDocument = async (e) => {
        e.preventDefault();
        if (studentId === "" || semester === "") {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(getSpecificResult({
            "studentId": studentId,
            "semester": semester
          }))
        setLoading(false)

    }

    const res = useSelector((state) => state.results.getSpecificResult);

    // console.log(res)

    let StudentResult = res?.data


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Result Fetched Successfully", "success");
                    // setTimeout(() => {
                    //     // navigate('/requirements')
                    // }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [studentId, onChangeStudentId, semester, onChangeSemester, onAddDocument , StudentResult]
}

export default GetResultForSpecificStudent
