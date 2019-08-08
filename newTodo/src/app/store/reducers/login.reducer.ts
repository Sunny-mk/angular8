import { createReducer, on } from '@ngrx/store';
import { LOGINSUCCESS, LOGINFAILURE } from '../action/login.action';
export interface LoginState {
  loginState: boolean;
}
export const initLoginState: LoginState = {
  loginState: true
};
export const loginReducer = createReducer( initLoginState,
  on(LOGINSUCCESS, state => state = { ...state, loginState: true }),
  on(LOGINFAILURE, state => state = { ...state, loginState: false }),
);
