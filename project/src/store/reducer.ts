import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import {films} from '../mocks/films';
import { Films } from '../types/film-type';
import {changeGenreAction, loadFilmsAction, requireAuthorization, setFilmsAction} from './action';

type InitalState = {
  genre: string;
  films: Films;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitalState = {
  genre: 'All genres',
  films: [],
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
      state.films = action.payload === 'All genres' ? films : films.filter((item) => item.genre === action.payload);
    })
    .addCase(setFilmsAction, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilmsAction, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
export {reducer};
