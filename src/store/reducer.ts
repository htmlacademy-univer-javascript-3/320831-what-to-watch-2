import { authSlice } from './auth/auth-slices.ts';
import { filmSlice } from './films/film-slices.ts';
import { combineReducers } from '@reduxjs/toolkit';
import { EReducers } from '../types/api.ts';
export const reducer = combineReducers({
  [EReducers.Auth]: authSlice.reducer,
  [EReducers.Films]: filmSlice.reducer,
});
