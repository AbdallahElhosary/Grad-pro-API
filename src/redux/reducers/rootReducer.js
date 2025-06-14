import { combineReducers } from "redux";
import matrialReducer from "./matrialReducer";
import departmantsReducer from "./departmentsReducer";
import courseReducer from "./courseReducer";
import adminReducer from "./adminReducer";
import authReducer from "./authReducer";
import studentsReducer from "./studentsReducer";
import documentReducer from "./documentReducer";

export default combineReducers({
    allMatrail : matrialReducer,
    departments: departmantsReducer,
    docuemnts: documentReducer,
    courses: courseReducer,
    admins: adminReducer,
    auth: authReducer,
    students: studentsReducer
})