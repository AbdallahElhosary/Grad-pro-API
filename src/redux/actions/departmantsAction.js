import {  useGetDataToken } from "../../hooks/useGetData";
import { GET_ALL_DEPARTMENTS } from "../type";

// Action to get all categories
export const getAllDepartments = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Department/GetAllDepartments`);
        dispatch({
            type: GET_ALL_DEPARTMENTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_DEPARTMENTS,
            payload: "Erorr" + e
        })
    }
}
