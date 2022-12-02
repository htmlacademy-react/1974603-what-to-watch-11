import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import { APIRoute, AuthorizationStatus } from '../const';
import {Films} from '../types/film-type.js';
import { commentsAction, loadFilmsAction, requireAuthorization } from './action';
import { AuthData } from '../types/auth-data.js';
import { UserData } from '../types/user-data.js';
import { dropToken, saveToken } from '../services/token.js';
import { Comments } from '../types/comment-type.js';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilmsAction(data));
  },
);

export const filmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/films/film_id',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Film);
    dispatch(loadFilmsAction(data));
  },
);

export const similarAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/film/film_id/similar',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Similar);
    dispatch(loadFilmsAction(data));
  },
);

export const favoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/favorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Favorite);
    dispatch(loadFilmsAction(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comments/film_id',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Comments>(APIRoute.Comments);
    dispatch(commentsAction(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);
export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
