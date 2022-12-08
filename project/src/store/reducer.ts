import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Comment } from '../types/comment-type';
import { Film } from '../types/film-type';
import {changeGenreAction, setFilmsAction, requireAuthorization, setFilmsLoadingAction, setFilmAction, setUserNameAction, setError, setNewCommentAction, setCommentsAction} from './action';

type InitalState = {
  allFilms: Film[];
  films: Film[];
  film: Film | undefined;
  genre: string;
  genres: string [];
  loading: boolean;
  userName: string;
  error: string | null;
  comments: Comment[];
  comment: Comment | undefined;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  allFilms: [],
  films: [],
  film: undefined,
  genre: 'All genres',
  genres: [],
  loading: false,
  userName: '',
  error: null,
  comments: [],
  comment: undefined,
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
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
    .addCase(setUserNameAction, (state, action) => {
      state.userName = action.payload;
    })
    .addCase(setNewCommentAction, (state, action) => {
      state.comment = action.payload;
    })
    .addCase(setCommentsAction, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
export {reducer};
