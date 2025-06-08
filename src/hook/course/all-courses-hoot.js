import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses, getAllCoursesPagenation } from '../../redux/actions/courseAction';

const AllCoursesPageHook = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const coursesPerPage = 5;

    useEffect(() => {
        dispatch(getAllCourses());
        // dispatch(getAllCoursesPagenation(page, coursesPerPage));
    }, []);

    const courses = useSelector(state => state?.courses?.getAllCourses);
    console.log(courses)
    // const loading = useSelector(state => state.courses.loading);


    const getPage = (pageNumber) => {
        setPage(pageNumber);
    };

    return [courses];
}

export default AllCoursesPageHook


