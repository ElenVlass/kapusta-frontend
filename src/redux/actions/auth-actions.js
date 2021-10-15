import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const loginGoogleRequest = createAction('auth/loginGoogleRequest');
const loginGoogleSuccess = createAction('auth/loginGoogleSuccess');
const loginGoogleError = createAction('auth/loginGoogleError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const refreshSessionRequest = createAction('auth/refreshSessionRequest');
const refreshSessionSuccess = createAction('auth/refreshSessionSuccess');
const refreshSessionError = createAction('auth/refreshSessionError');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');

const resendEmailVerification = createAction('auth/resendEmailVerification');

const actions = {
  registerRequest,
  registerSuccess,
  registerError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  loginGoogleRequest,
  loginGoogleSuccess,
  loginGoogleError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  refreshSessionRequest,
  refreshSessionSuccess,
  refreshSessionError,
  resendEmailVerification,
};

export default actions;
