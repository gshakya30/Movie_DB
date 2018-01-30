import { FETCH_RECENTLY_RELEASED_MOVIES } from '../actions/index';


export default function(state=[], action) {
    switch (action.type) {
        case  FETCH_RECENTLY_RELEASED_MOVIES : return action.payload.data.results;
    }
    return state;
}