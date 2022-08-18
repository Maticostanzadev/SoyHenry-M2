import { ADD_MOVIE_FAVOURITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVOURITE } from '../actions';

const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE_FAVOURITE:
      return {
        ...state,
        moviesFavourites: [...state.moviesFavourites, action.payload]
      };

    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload
      };

    case REMOVE_MOVIE_FAVOURITE:
      return {
        ...state,
        moviesFavourites: state.moviesFavourites.filter(m => m.imdbID !== action.payload)
      };

    default:
      break;
  }
}

export default rootReducer;