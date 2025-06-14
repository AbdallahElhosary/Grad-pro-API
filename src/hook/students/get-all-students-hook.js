import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteStudent, getAllStudentsAction, getAllStudentsPagenation } from '../../redux/actions/studentsAction';

const GetAllStudentsHook = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)

    const MatrialsPerPage = 5


    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllStudentsAction());
    }, [])

    const allStudents = useSelector(state => state.students.getAllStudents);

    console.log(allStudents)

    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllStudentsPagenation(1, MatrialsPerPage));
    }, [])
    // Select Category

    const studentsPagentionAll = useSelector(state => state.students.getAllStudentsPagentaion);

    console.log(studentsPagentionAll)

    //name pageCount to get the page numbers 
    let pageCount = 0;

    if (allStudents.totalCount > MatrialsPerPage) {
        pageCount = Math.ceil(allStudents.totalCount / MatrialsPerPage)
    }


    const getPagePagenta = (page) => {
        const get = async () => {
            await dispatch(getAllStudentsPagenation(page, MatrialsPerPage))
        }
        get();
    }


    // on delection function
    
        const onDelete = async (id) => {
            setLoading(true)
            await dispatch(deleteStudent(id))
            setLoading(false)

            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }



    // Function to get the page


    return [allStudents, studentsPagentionAll, pageCount, getPagePagenta, onDelete]
}

export default GetAllStudentsHook
