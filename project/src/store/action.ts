import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import {Comment} from '../types/comment-type';
import {Film} from '../types/film-type';
import { UserData } from '../types/user-data';

export const changeGenreAction = createAction<string>('data/changeGenreAction');
export const setFilmsAction = createAction<Film[]>('data/setFilmsAction');
export const setFilmAction = createAction<Film>('data/setFilmAction');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setCommentsAction = createAction<Comment[]>('data/comments');
export const setNewCommentAction = createAction<Comment>('data/newComment');
export const setFilmsLoadingAction = createAction<boolean>('data/loadingFilms');
export const redirectToRoute = createAction<AppRoute>('data/redirectToRoute');
export const setUserDataAction = createAction<UserData>('data/userData');
export const setError = createAction<string | null>('data/setError');
