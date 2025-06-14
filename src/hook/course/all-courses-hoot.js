import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getAllCoursesPagenation } from '../../redux/actions/courseAction';

const AllCoursesPageHook = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const coursesPerPage = 5;
    const [loading, setLoading] = useState(true)

    // const [courses, setCourses] = useState([]);

    useEffect(() => {

             dispatch(getAllCourses());
        // dispatch(getAllCoursesPagenation(page, coursesPerPage));
    }, []);

    const courses = useSelector(state => state?.courses?.getAllCourses);

    // console.log("coursesRes", courses)
    // const loading = useSelector(state => state.courses.loading);


    

    return [courses];
}

export default AllCoursesPageHook


