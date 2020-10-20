import axios from "../../themoviedb";
import * as actionTypes from "./actionTypes";

export const storeElement = (id, elType) => {
    return {
        type: actionTypes.STORE_RESULT,
        id: id,
        elType: elType
    };
};

const fetchMovieSuccess = (response) => ({
    type: actionTypes.FETCH_MOVIE_SUCCESS,
    details: response
})

const fetchMovieFail = (error) => ({
    type: actionTypes.FETCH_MOVIE_FAIL,
    error: error
})

export const fetchMovieDetails = (id,elType) => {
    return dispatch => {
        axios.get(`/movie/${id}?api_key=2316e7e3b848b29f201d3e758ba6af64`)
        .then(response => {
            dispatch(fetchMovieSuccess(response.data));
        })
        .catch(error => {
            dispatch(fetchMovieFail(error));
        })
    }
}
