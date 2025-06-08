import { useGetData } from "../../hooks/useGetData";
import { GET_ALL_DEPARTMENTS, GET_ERROR } from "../type";

// Action to get all categories
export const getAllDepartments = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/Department/GetAllDepartments`);
        dispatch({
            type: GET_ALL_DEPARTMENTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}
