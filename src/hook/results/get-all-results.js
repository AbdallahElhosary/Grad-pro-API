import { useEffect, useState } from 'react'
import notify from '../useNotify'
import { useDispatch, useSelector } from 'react-redux';
import { getAllResultsAction } from '../../redux/actions/resultAction';

const GetAllResultsHook = () => {
    const dispatch = useDispatch();
    const [semester, setSemester] = useState('Semester1')
    const [loading, setLoading] = useState(false)
    
    const onChangeSemester = (e) => {
        setSemester(e.target.value)
    }

    const onSearch = async (e) => {
        e.preventDefault();
        if (semester === "" ) {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(getAllResultsAction(semester))
        setLoading(false)

    }

    const res = useSelector(state => state.results.getAllResult);

    console.log(res)
    let results = res[0]?.results

    

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

    return [onSearch, semester, onChangeSemester, results]
}

export default GetAllResultsHook
