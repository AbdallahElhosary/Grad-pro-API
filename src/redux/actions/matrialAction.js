import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { ADD_MATRIAL, DELETE_MATRIAL, GET_ALL_MATRIAL, GET_ALL_MATRIAL_PAGENAT, GET_ERROR } from "../type";

// Action to get all Matrial
// Action to get all Matrial
export const getAllMatrial = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/Material/GetAllMaterialsWithCount`);
        dispatch({
            type: GET_ALL_MATRIAL,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Erorr" + e
        })
    }
}


// Action to get all matrial pagentaion
export const getAllMatrialPagenation = (page, numPerPage) => async (dispatch) => {
    try {
        const response = await useGetData(`/api/Material/GetAllMaterialsInPagnation/${page}/${numPerPage}`);
        dispatch({
            type: GET_ALL_MATRIAL_PAGENAT,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_MATRIAL_PAGENAT,
            payload: "Erorr" + e
        })
    }
}

// funciton to Add Matiral
export const addMatrial = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Material/Dashboard/AddNewMaterial`, data);
        dispatch({
            type: ADD_MATRIAL,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: ADD_MATRIAL,
            payload: e.response
        })
    }
}


// funciton to deleteMatrial
export const deleteMatrial = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/Material/Dashboard/DeleteMaterial/${id}`);
        dispatch({
            type: DELETE_MATRIAL,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_MATRIAL,
            payload: e.response
        })
    }
}


// funciton to updateMatrial
export const updateMatrial = (data) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/Material/Dashboard/UpdateMaterial` , data);
        dispatch({
            type: DELETE_MATRIAL,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}
