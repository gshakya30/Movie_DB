import { combineReducers } from 'redux';
import TopRatedMovies from './reducer_top_rated_movies';
import RecentlyReleasedMovies from './reducer_recently_released';


const rootReducer = combineReducers({
  topRatedMovies: TopRatedMovies,
  recentlyReleasedMovies: RecentlyReleasedMovies
  
});

export default rootReducer;
