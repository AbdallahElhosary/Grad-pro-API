import { GET_ALL_COURSES, ADD_COURSE, DELETE_COURSE, GET_ALL_COURSES_PAGENAT, UPDATE_COURSE, GET_AVAILABLE_COURSES, GET_RECOM_COURSES } from '../type'

const inital = {
    getAllCourses: [],
    getAvailableCourses: [],
    getRecomCourses: [],
    loading: true
}
const courseReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return {
                ...state,
                getAllCourses: action.payload,
                loading: false
            }



        case ADD_COURSE:
            return {
                ...state,
                addCourse: action.payload,
                loading: false,
            }

        case DELETE_COURSE:
            return {
                ...state,
                deleteCourse: action.payload,
                loading: false,
            }

        case UPDATE_COURSE:
            return {
                ...state,
                updateCourse: action.payload,
                loading: false,
            }
        case GET_ALL_COURSES_PAGENAT:
            return {
                ...state,
                getAllCoursesPagenation: action.payload,
                loading: false
            }
        


        default:
            return state;
    }
}
export default courseReducer