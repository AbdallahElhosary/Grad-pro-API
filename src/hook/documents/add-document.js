import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import notify from '../useNotify';
import { addDocument } from '../../redux/actions/documentAction';

const AddDocumentHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // The States
    const [documentName, setDocumentName] = useState("")
    const [documentLink, setDocumentLink] = useState("")
    const [loading , setLoading] = useState(true)



    const onChangeName = (e) => {
        setDocumentName(e.target.value)
    }
    const onChangeCode = (e) => {
        setDocumentLink(e.target.value)
    }
    

    const onAddDocument = async (e) => {
        e.preventDefault();
        if (documentName === "" || documentLink === "" ) {
            notify("Please Fill The Form", "warn")
            return;
        }
        setLoading(true)

        await dispatch(addDocument({
            "nameOfDocument": documentName,
            "linkOfDocument": documentLink
          }))
        setLoading(false)

    }

    const res = useSelector((state) => state.docuemnts?.addDocument);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Document Added Successfully", "success");
                    setTimeout(() => {
                        navigate('/requirements')
                    }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [documentName, onChangeName, documentLink, onChangeCode, onAddDocument]

}

export default AddDocumentHook
