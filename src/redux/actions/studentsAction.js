import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import { GET_ALL_STUDENTS, GET_ERROR, GET_ALL_STUDENTS_PAGENAT, ADD_STUDENT, DELETE_STUDENT, GET_STUDENT_BY_ID, GET_AVAILABLE_COURSES, GET_RECOM_COURSES, ENROLL_SUBJECTS } from "../type";

// Action to get all Student
export const getAllStudentsAction = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Student/DashBoard/GetAllStudents`);
        dispatch({
            type: GET_ALL_STUDENTS,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_STUDENTS,
            payload: "Erorr" + e
        })
    }
}

// Action to get all Student
export const getStudentById = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Student/DashBoard/GetStudentByIdForStudent/${id}`);
        dispatch({
            type: GET_STUDENT_BY_ID,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_STUDENT_BY_ID,
            payload: "Erorr" + e
        })
    }
}


// Action to get all Student pagentaion
export const getAllStudentsPagenation = (page, numPerPage) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Student/DashBoard/GetAllStudentsInpagnation/${page}/${numPerPage}`);
        dispatch({
            type: GET_ALL_STUDENTS_PAGENAT,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_STUDENTS_PAGENAT,
            payload: "Erorr" + e
        })
    }
}


// funciton to Add Student
export const addStudent = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Student/DashBoard/AddNewStudent`, data);
        dispatch({
            type: ADD_STUDENT,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: ADD_STUDENT,
            payload: e.response
        })
    }
}


// funciton to deleteStudent
export const deleteStudent = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/Student/DashBoard/DeleteStudent/${id}`);
        dispatch({
            type: DELETE_STUDENT,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: DELETE_STUDENT,
            payload: e.response
        })
    }
}

// Action to get all available Courses
export const getAvailableCourses = (code) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Course/GetAllAvalibleCourses/${code}`);
        dispatch({
            type: GET_AVAILABLE_COURSES,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_AVAILABLE_COURSES,
            payload: "Error" + e
        })
    }
}


// Action to get all REcommentin Courses
export const getRecomCourses = (code) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/Course/GetAllRecommendationCourses/${code}`);
        dispatch({
            type: GET_RECOM_COURSES,
            payload: response
        })
    } catch (e) {
        dispatch({
            type: GET_RECOM_COURSES,
            payload: "Error" + e
        })
    }
}

// funciton to  Enroll Student
export const enrollSubjects = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/Student/EnrollCourses`, data);
        dispatch({
            type: ENROLL_SUBJECTS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: ENROLL_SUBJECTS,
            payload: e.response
        })
    }
}
