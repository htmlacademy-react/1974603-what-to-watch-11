import {State} from '../types/state';

export const selectGenre = (state:State) => state.genre;
export const selectGenres = (state:State) => state.genres;
export const selectFilms = (state:State) => state.films;
export const selectFilm = (state:State) => state.film;
export const selectFilmsLoading = (state:State) => state.loading;
export const selectAuthorizationStatus = (state:State) => state.authorizationStatus;
export const selectNewComment = (state:State) => state.comment;
export const selectPromoFilm = (state:State) => state.promoFilm;
export const selectComments = (state:State) => state.comments;
export const selectUserName = (state:State) => state.userData?.avatarUrl;
