import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.js';
import {APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {setFilmsAction, requireAuthorization, setFilmsLoadingAction, setFilmAction, redirectToRoute, setError, setNewCommentAction, setCommentsAction, setPromoFilmAction, setUserDataAction, setFavoriteFilmsAction, setFilmStatus} from './action';
import {AuthData} from '../types/auth-data.js';
import {UserData} from '../types/user-data.js';
import {dropToken, saveToken } from '../services/token';
import {Comment, CommentPost} from '../types/comment-type.js';
import {Film} from '../types/film-type.js';
import {store} from './';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadingAction(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmsLoadingAction(false));
    dispatch(setFilmsAction(data));
  },
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/films/film_id',
  async (filmId, {dispatch, extra: api}) => {
    dispatch(setFilmAction(undefined));
    const {data} = await api.get<Film>(`${APIRoute.Film}/${filmId}`);
    dispatch(setFilmAction(data));
  },
);

export const similarFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/film/film_id/similar',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Similar);
    dispatch(setFilmsAction(data));
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/promoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(setPromoFilmAction(data));
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Favorite);
    dispatch(setFavoriteFilmsAction(data));
  },
);

export const setFilmStatusAction = createAsyncThunk<void, {filmId: number; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setFilmStatusAction',
  async ({filmId, status}, {dispatch, extra: api}) => {
    const {data} = await api.post<Film>(`${APIRoute.FilmStatus}/${filmId}/${status}`);
    dispatch(setFilmStatus(data));
  },
);

export const fetchCommentsListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/commentsList',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`comments/${id}`);
    dispatch(setCommentsAction(data));
  },
);

export const addNewCommentAction = createAsyncThunk<Comment, CommentPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/newComment',
  async ({filmId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`/comments/${filmId}`, {comment, rating});
    dispatch(setNewCommentAction(data));
    dispatch(redirectToRoute(`${APIRoute.Film}/${filmId}`));
    return data;
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
      const {data} = await api.get<UserData>(`${APIRoute.Login}`);
      dispatch(setUserDataAction(data));
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
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.MyList));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(`${APIRoute.Logout}`);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.SignIn));
  },
);

export const clearErrorAction = createAsyncThunk(
  'data/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
