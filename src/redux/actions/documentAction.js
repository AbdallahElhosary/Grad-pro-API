import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { ADD_DOC, DELETE_DOC, GET_ALL_DOCS } from "../type";

// Action to get all docuemts
export const getAllDocuments = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Document/GetAll`);
        dispatch({
            type: GET_ALL_DOCS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_DOCS,
            payload: "Erorr" + e
        })
    }
}


// funciton to Add Matiral
export const addDocument = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Document`, data);
        dispatch({
            type: ADD_DOC,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: ADD_DOC,
            payload: e.response
        })
    }
}

// funciton to deleteDocument
export const deleteDocument = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/Document/${id}`);
        dispatch({
            type: DELETE_DOC,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_DOC,
            payload: e.response
        })
    }
}
