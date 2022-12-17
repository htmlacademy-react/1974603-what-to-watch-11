import {createReducer} from '@reduxjs/toolkit';
import { Comment } from '../../types/comment-type';
import { Film } from '../../types/film-type';
import {changeGenreAction, setFilmsAction, setFilmsLoadingAction, setFilmAction, setError, setNewCommentAction, setCommentsAction, setPromoFilmAction, setFavoriteFilmsAction, setFilmStatus} from '../action';

type InitialState = {
  allFilms: Film[];
  films: Film[];
  film: Film | undefined;
  promoFilm: Film | undefined;
  genre: string;
  genres: string [];
  loading: boolean;
  error: string | null;
  favoriteFilms: Film[];
  filmStatus: Film | undefined;
  comments: Comment[];
  comment: Comment | undefined;
}

const initialState: InitialState = {
  allFilms: [],
  films: [],
  film: undefined,
  promoFilm: undefined,
  filmStatus: undefined,
  genre: 'All genres',
  genres: [],
  loading: false,
  error: null,
  favoriteFilms: [],
  comments: [],
  comment: undefined,
};

const filmReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFilmsLoadingAction, (state, action) => {
      state.loading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
      state.films = action.payload === 'All genres' ? state.allFilms : state.allFilms.filter((item) => item.genre === action.payload);
    })
    .addCase(setFilmsAction, (state, action) => {
      state.allFilms = action.payload;
      state.films = action.payload;
      state.genres = Array.from(new Set((action.payload.map((item) => item.genre))));
    })
    .addCase(setFilmAction, (state, action) => {
      state.film = action.payload;
    })
    .addCase(setPromoFilmAction, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(setFavoriteFilmsAction, (state, action) => {
      state.favoriteFilms = action.payload;
    })
    .addCase(setFilmStatus, (state, action) => {
      if (state.film && state.film.id === action.payload.id){
        state.film = action.payload;
      }
      if (state.promoFilm && state.promoFilm.id === action.payload.id) {
        state.promoFilm = action.payload;
      }
      if (action.payload.isFavorite) {
        state.favoriteFilms.push(action.payload);
      } else {
        state.favoriteFilms = state.favoriteFilms.filter((films) => films.id !== action.payload.id);
      }
    })
    .addCase(setNewCommentAction, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setCommentsAction, (state, action) => {
      state.comments = action.payload;
    });
});
export {filmReducer};
