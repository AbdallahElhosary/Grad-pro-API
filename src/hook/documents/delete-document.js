import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMatrial, updateMatrial } from "../../redux/actions/matrialAction";
import notify from "../useNotify";
import { useNavigate } from "react-router";
import GetAllDocuments from "./get-all-documents";
import { deleteDocument } from "../../redux/actions/documentAction";

const DelteDocumentHook = ({ id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true)


    const [documentsData] = GetAllDocuments();
    
   
    
    // on delection function

    const onDelete = async (id) => {
        setLoading(true)
        await dispatch(deleteDocument(id))
        setLoading(false)
    }

    const theUpdatedItem = documentsData?.documents?.filter((item)=> item.id===id)


    const onUpdate = async () => {
        setLoading(true)
        await dispatch(updateMatrial(theUpdatedItem))
        setLoading(false)
    }

    const res = useSelector(state => state.allMatrail.delteMatrial);

    console.log(res)


    useEffect(() => {
        if (loading === false) {
            if (res.status === 204) {
                notify("Document Deleted Successfully", "error")
                setTimeout(() => {
                    // window.location.reload(false)
                }, 2000);
            }
            else {
                notify("Deletion Error", "error")
            }
        }
    }, [loading])


    useEffect(() => {
        if (loading === false) {
            if (res) {
                if (res.status === 200) {
                    notify("Document Updated Successfully", "success");
                    // setTimeout(() => {
                    //     navigate('/matrial')
                    // }, 1000)
                } else {
                    notify("There is an error , please try again", "error");
                }
            }
        }

    }, [loading])

    return [onDelete, onUpdate]
}

export default DelteDocumentHook
