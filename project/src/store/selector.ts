import { State } from '../types/state';

export const selectGenre = (state:State) => state.films.genre;
export const selectGenres = (state:State) => state.films.genres;
export const selectFilms = (state:State) => state.films.films;
export const selectFilm = (state:State) => state.films.film;
export const selectFavoriteFilms = (state:State) => state.films.favoriteFilms;
export const selectFilmsLoading = (state:State) => state.films.loading;
export const selectPromoFilm = (state:State) => state.films.promoFilm;
export const selectComments = (state:State) => state.films.comments;
export const selectError = (state:State) => state.films.error;
export const selectUserData = (state:State) => state.user.userData;
export const selectAuthorizationStatus = (state:State) => state.user.authorizationStatus;
