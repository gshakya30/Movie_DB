import { FETCH_TOP_RATED_MOVIES } from '../actions/index';
import { FETCH_ALL_TOP_RATED_MOVIES } from '../actions/index';



export default function(state=[], action) {
    switch (action.type) {
        case  FETCH_TOP_RATED_MOVIES : return action.payload.data.results;

        case  FETCH_ALL_TOP_RATED_MOVIES : return action.payload.data.results;
    }
    return state;
}