import axios from '../../themoviedb';
import * as actionTypes from './actionTypes';

const searchSuccess = (queryType,data) => ({
    type: actionTypes.SEARCH_SUCCESS,
    values: data,
    queryType: queryType
})

const searchFail = (error) => ({
    type: actionTypes.SEARCH_FAIL,
    error:error
})
const axiosRequest = (dispatch,queryType,query) => {
    axios.get(`/search/${queryType}?query=${query}&api_key=2316e7e3b848b29f201d3e758ba6af64`)
    .then(response => {
        dispatch(searchSuccess(queryType,response.data.results))            
    })
    .catch(error => {
        dispatch(searchFail(error))
    })
}
export const search = (query) => {
    return dispatch => {
        axiosRequest(dispatch,'movie',query);
        axiosRequest(dispatch,'tv',query);
        axiosRequest(dispatch,'person',query);
        axiosRequest(dispatch,'collection',query);
        axiosRequest(dispatch,'keyword',query);
        axiosRequest(dispatch,'company',query);
    }
}