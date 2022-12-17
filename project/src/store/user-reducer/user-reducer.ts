import {createReducer} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../../const';
import { UserData } from '../../types/user-data';
import { requireAuthorization, setUserDataAction } from '../action';

type InitialState = {
  userData: UserData | undefined;
  authorizationStatus: AuthorizationStatus;
}

const initialState: InitialState = {
  userData: undefined,
  authorizationStatus: AuthorizationStatus.Unknown
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserDataAction, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
export {userReducer};
