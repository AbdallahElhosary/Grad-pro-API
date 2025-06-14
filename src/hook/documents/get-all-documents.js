import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDocuments } from '../../redux/actions/documentAction';

const GetAllDocuments = () => {
    const dispatch = useDispatch();

   


    // Get All Matrials with limit
    useEffect(() => {
        dispatch(getAllDocuments());
    }, [])

    const documentsData = useSelector(state => state.docuemnts.getAllDocuments);

    console.log(documentsData)


    
    // Select Category


    //name pageCount to get the page numbers 
    

    



    // Function to get the page


    return [documentsData]
}

export default GetAllDocuments
