import { GET_ALL_DEPARTMENTS } from '../type'

const inital = {
    getAllDepartments: [],
}
const departmantsReducer = (state = inital, action) => {
    switch (action.type) {
        
        case GET_ALL_DEPARTMENTS:
                    return {
                        ...state,
                        getAllDepartments: action.payload,
                    }
        default:
            return state;
    }
}
export default departmantsReducer