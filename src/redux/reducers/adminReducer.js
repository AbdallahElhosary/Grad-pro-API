import { SEND_MESSAGE, ADD_ADMIN, DELETE_ADMIN } from '../type'

const inital = {
}
const adminReducer = (state = inital, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                sendMessage: action.payload,
                loading:false
            }

        case ADD_ADMIN:
            return {
                ...state,
                addAdminAction: action.payload,
                loading: false,
            }
        case DELETE_ADMIN:
            return {
                ...state,
                deleteAdmin: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default adminReducer