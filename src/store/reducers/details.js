import * as actionTypes from "../actions/actionTypes";

const initialState = {
    id: null,
    elType: "",
    detail: null,
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                id: action.id,
                elType: action.elType
            };
        case actionTypes.FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                detail: action.details
            };
        case actionTypes.FETCH_MOVIE_FAIL:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};
export default reducer;
