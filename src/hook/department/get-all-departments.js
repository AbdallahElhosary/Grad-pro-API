import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartments } from '../../redux/actions/departmantsAction';
const AllDepartmentsPageHook = () => {
    const dispatch = useDispatch();

    // Get All departments with limit
    useEffect(() => {
        dispatch(getAllDepartments());
        }, [])
    // Select departments
    const departments = useSelector(state => state.departments.getAllDepartments);

    console.log(departments)
    // Select Loading

    // Function to get the page


    return [departments]
}

export default AllDepartmentsPageHook
