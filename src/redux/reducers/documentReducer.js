import {  ADD_DOC, DELETE_DOC, GET_ALL_DOCS } from '../type'

const inital = {
    getAllDocuments: [],
}
const documentReducer = (state = inital, action) => {
    switch (action.type) {
        
        case GET_ALL_DOCS:
                    return {
                        ...state,
                        getAllDocuments: action.payload,
            }
        case ADD_DOC:
                    return {
                        ...state,
                        addDocument: action.payload,
                        loading: false,
            }
        case DELETE_DOC:
            return {
                ...state,
                deleteDocument: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}
export default documentReducer