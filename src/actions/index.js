import axios from 'axios';

const ROOT_URL = `https://api.themoviedb.org/3`;
const API_KEY = `4a528f1765f315e7d593d9de3c30babd`

//create action creator

export const FETCH_TOP_RATED_MOVIES = 'FETCH_TOP_RATED_MOVIES';

export const FETCH_ALL_TOP_RATED_MOVIES = 'FETCH_ALL_TOP_RATED_MOVIES';


export const FETCH_UPCOMING_MOVIES = 'FETCH_UPCOMING_MOVIES';

export const FETCH_ALL_UPCOMING_MOVIES = 'FETCH_ALL_UPCOMING_MOVIES';

export const FETCH_RECENTLY_RELEASED_MOVIES = 'FETCH_RECENTLY_RELEASED_MOVIES';

export const SELECTED_MOVIE = 'SELECTED_MOVIE';

export function fetchTopRatedMovies() {
    const url = `${ROOT_URL}/discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_TOP_RATED_MOVIES,
        payload: request
    };
}

export function fetchAllTopRatedMovies() {
    const url = `${ROOT_URL}/discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_TOP_RATED_MOVIES,
        payload: request
    };
}

export function fetchRecentlyReleasedMovies() {
    const url = `${ROOT_URL}/discover/movie?primary_release_date.lte=${new Date().toISOString().slice(0,10)}&sort_by=release_date.desc&api_key=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_RECENTLY_RELEASED_MOVIES,
        payload: request
    };
}

export function selectedMovie(moviedId) {
    const url = `${ROOT_URL}/discover/movie/${moviedId}?api_key=${API_KEY}`;
    const request = axios.get(url);
    return {
        type: SELECTED_MOVIE,
        payload: request
    };
}