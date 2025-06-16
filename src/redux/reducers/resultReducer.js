import { GET_SPECIFIC_RESULT, GET_ALL_RESULTS, UPDATE_RESULTS } from "../type";

const inital = {
    getSpecificResult: [],
    getAllResult: [],
}
const resultReducer = (state = inital, action) => {
    switch (action.type) {
        case GET_SPECIFIC_RESULT:
            return {
                ...state,
                getSpecificResult: action.payload,
            }
        case GET_ALL_RESULTS:
            return {
                ...state,
                getAllResult: action.payload,
            }
        case UPDATE_RESULTS:
            return {
                ...state,
                updateResult: action.payload,
                    }
        default:
            return state;
    }
}
export default resultReducer