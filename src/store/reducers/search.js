import * as actionTypes from "../actions/actionTypes";

const initialState = {
    queryResult:{
        movie: [],
        tv: [],
        person: [],
        collection: [],
        keyword: [],
        company: [],
    },
    error: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                queryResult:{
                    ...state.queryResult,
                    [action.queryType]:action.values
                }
            };
        case actionTypes.SEARCH_FAIL:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;
