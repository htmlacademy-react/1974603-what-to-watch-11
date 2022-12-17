import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../services/api';
import {redirect} from './middlewares/redirect';
import { filmReducer } from './film-reducer/film-reducer';
import { userReducer } from './user-reducer/user-reducer';

export const api = createAPI();

export const store = configureStore({
  reducer: {
    films: filmReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect)
});
