import { useInsertData } from "../../hooks/useInsertData";
import { ADD_ADMIN, GET_ERROR } from "../type";



// funciton to Add Matiral
export const addAdmin = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Admin/AddAdmin`, data);
        dispatch({
            type: ADD_ADMIN,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}