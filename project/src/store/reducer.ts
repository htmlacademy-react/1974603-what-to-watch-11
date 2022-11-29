import {createReducer} from '@reduxjs/toolkit';
import {films} from '../mocks/films';
import {changeGenreAction} from './action';

const initialState = {
  genre: 'All genres',
  films: films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state) => {
      state.films = state.genre === 'All genres' ? state.films : state.films.filter((item) => item.genre === state.genre);
    });
});
export {reducer};
