import { LOGIN, SIGN_UP, RESET_PASSWORD, FORGET_PASSWORD } from '../type'

const inital = {
    
}
const authReducer = (state = inital, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload,
                loading: false,
            } 
        case SIGN_UP:
            return {
                ...state,
                signup: action.payload,
                loading: false,
            }
        case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
                loading: false,
            }
        case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
                loading: false,
                        }
        default:
            return state;
    }
}
export default authReducer