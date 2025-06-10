import { useInsertData } from "../../hooks/useInsertData";
import { GET_ERROR, LOGIN, SIGN_UP } from "../type";


// Method to Login
export const loginAction = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Account/Login`, data);
        dispatch({
            type: LOGIN,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: LOGIN,
            payload: e.response
        })
    }
}


// Method to create a Account
export const createAccount = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Account/Register`, data);
        dispatch({
            type: SIGN_UP,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: SIGN_UP,
            payload: e.response
        })
    }
}



