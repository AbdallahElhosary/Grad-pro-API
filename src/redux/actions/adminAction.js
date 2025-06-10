import { useInsertData } from "../../hooks/useInsertData";
import { ADD_ADMIN, GET_ERROR, SEND_MESSAGE } from "../type";



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

// funciton to Add Matiral
export const sendMessageAction = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Admin/SendMessages`, data);
        dispatch({
            type: SEND_MESSAGE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}