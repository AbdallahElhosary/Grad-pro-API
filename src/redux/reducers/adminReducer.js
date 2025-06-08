import { GET_ALL_ADMINS, ADD_ADMIN, DELETE_ADMIN } from '../type'

const inital = {
    getAllAdmin: [],
}
const adminReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_ALL_ADMINS:
            return {
                ...state,
                getAllAdmin: action.payload,
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