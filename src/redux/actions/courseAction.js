import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { useUpdateData } from "../../hooks/useUpdateData";
import { ADD_COURSE, DELETE_COURSE, GET_ALL_COURSES, GET_ALL_COURSES_PAGENAT, GET_ERROR, UPDATE_COURSE } from "../type";

// Action to get all Courses
export const getAllCourses = () => async (dispatch) => {
    try {
        const response = await useGetData(`/api/Course/DashBoard/GetAllCourses`);
        dispatch({
            type: GET_ALL_COURSES,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error" + e
        })
    }
}

// // Action to get all courses with pagination
// export const getAllCoursesPagenation = (page, numPerPage) => async (dispatch) => {
//     try {
//         const response = await useGetData(`/api/Course/DashBoard/GetAllCoursesInPagnation/${page}/${numPerPage}`);
//         dispatch({
//             type: GET_ALL_COURSES_PAGENAT,
//             payload: response
//         })
//     } catch (e) {
//         dispatch({
//             type: GET_ERROR,
//             payload: "Error" + e
//         })
//     }
// }


// funciton to Add Course
export const addCourse = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Course/DashBoard/AddCourse`, data);
        dispatch({
            type: ADD_COURSE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}


// funciton to delete Course
export const deleteCourse = (courseId) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/Course/Dashboard/DeleteCourse/${courseId}`);
        dispatch({
            type: DELETE_COURSE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}

// funciton to update Course
export const updateCourse = (data) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/Course/DashBoard/UpdateCourse` , data);
        dispatch({
            type: UPDATE_COURSE,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: e.response
        })
    }
}
