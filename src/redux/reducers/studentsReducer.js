import { GET_ALL_STUDENTS, GET_ALL_STUDENTS_PAGENAT, ADD_STUDENT, DELETE_STUDENT, GET_STUDENT_BY_ID, ENROLL_SUBJECTS, GET_AVAILABLE_COURSES, GET_RECOM_COURSES } from '../type'

const inital = {
    getAllStudents: [],
    // getAllStudentsPagentaion: []
}
const studentsReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return {
                ...state,
                getAllStudents: action.payload,
            }
        case GET_ALL_STUDENTS_PAGENAT:
            return {
                ...state,
                getAllStudentsPagentaion: action.payload,
            }
        case GET_STUDENT_BY_ID:
            return {
                ...state,
                getStudentById: action.payload,
            }
        case GET_AVAILABLE_COURSES:
            return {
                ...state,
                getAvailableCourses: action.payload,
                loading: false
            }
        case GET_RECOM_COURSES:
            return {
                ...state,
                getRecomCourses: action.payload,
                loading: false
            }
        case ENROLL_SUBJECTS:
            return {
                ...state,
                enrollSubjects: action.payload,
                }
        case ADD_STUDENT:
            return {
                ...state,
                addStudent: action.payload,
            }
        case DELETE_STUDENT:
            return {
                ...state,
                deleteStudent: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default studentsReducer