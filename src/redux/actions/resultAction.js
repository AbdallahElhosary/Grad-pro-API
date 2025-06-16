import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { GET_ALL_RESULTS, GET_SPECIFIC_RESULT, UPDATE_RESULTS } from "../type";

// funciton to Add Student
export const getSpecificResult = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Result/GetAllResultForSpecificStudent`, data);
        dispatch({
            type: GET_SPECIFIC_RESULT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_SPECIFIC_RESULT,
            payload: e.response
        })
    }
}


// Action to get all Student
export const getAllResultsAction = (semester) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Result/GetAllResultsForAllStudents/${semester}`);
        dispatch({
            type: GET_ALL_RESULTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_RESULTS,
            payload: "Erorr" + e
        })
    }
}


// funciton to Update REsults
export const uploadResultAction = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Result/AddResultWithExcel`, data);
        dispatch({
            type: UPDATE_RESULTS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: UPDATE_RESULTS,
            payload: e.response
        })
    }
}
