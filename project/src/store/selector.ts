import {State} from '../types/state';

export const selectGenre = (state:State) => state.genre;
export const selectFilm = (state:State) => state.films;
