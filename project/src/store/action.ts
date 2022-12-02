import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Comments } from '../types/comment-type';
import {Films} from '../types/film-type';

export const changeGenreAction = createAction<string>('data/changeGenreAction');
export const setFilmsAction = createAction<Films>('data/setFilmsAction');
export const loadFilmsAction = createAction<Films>('data/loadFilmsAction');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const commentsAction = createAction<Comments>('data/comments');
