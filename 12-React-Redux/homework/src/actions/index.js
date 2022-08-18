export const ADD_MOVIE_FAVOURITE = "ADD_MOVIE_FAVORUITE";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAILS";
export const REMOVE_MOVIE_FAVOURITE = "REMOVE_MOVIE_FAVOURITE";

export function addMovieFavourite(payload) {
  return {
    type: ADD_MOVIE_FAVOURITE,
    payload
  };
}

export function getMovies(titulo) {
  return function (dispatch) {
    fetch("http://www.omdbapi.com/?apikey=tuApiKey&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIES, payload: json });
      });
  };
}

export function getMovieDetail(imdbID) {
  return function (dispatch) {
    fetch("https://www.omdbapi.com/?apikey=f1a29182&i=" + imdbID)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: GET_MOVIE_DETAIL, payload: json });
      });
  };
}

export function removeMoviesFavourite(imdbID) {
  return {
    type: REMOVE_MOVIE_FAVOURITE,
    payload: imdbID
  }
}