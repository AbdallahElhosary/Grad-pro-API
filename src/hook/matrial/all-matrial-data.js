import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMatrial, getAllMatrialPagenation } from '../../redux/actions/matrialAction';

const AllMatrialPageHook = () => {
    const dispatch = useDispatch();

    const MatrialsPerPage = 5


    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllMatrial());
    }, [])

    const allMatrial = useSelector(state => state.matrial.getAllMatrial);

    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllMatrialPagenation(1, MatrialsPerPage));
    }, [])
    // Select Category

    const matrialPagentionAll = useSelector(state => state.matrial.getAllMatrialPagentaion);

    //name pageCount to get the page numbers 
    let pageCount = 0;

    if (allMatrial.totalCount > MatrialsPerPage) {
        pageCount = Math.ceil(allMatrial.totalCount / MatrialsPerPage)
    }


    const getPagePagenta = (page) => {
        const get = async () => {
            await dispatch(getAllMatrialPagenation(page, MatrialsPerPage))
        }
        get();
    }



    // Function to get the page


    return [allMatrial, matrialPagentionAll, pageCount, getPagePagenta]
}

export default AllMatrialPageHook


