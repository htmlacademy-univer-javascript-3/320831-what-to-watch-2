import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from '../types/store';
import { loadFilm, loadFilms, loadPromo, redirectToRoute, requireAuthorization, setFilmsDataLoadingStatus } from './action';
import { IFilmData } from '../data/abstractions/IFilmData';
import { Endpoints } from '../services/endpoints';
import { AuthorizationStatus } from '../data/enums/authorization-status';
import { AuthData } from '../data/types/auth-data';
import { IUserData } from '../data/abstractions/IUserData';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../data/enums/app-route';
import { IFilmAllInfo } from '../data/abstractions/IFilmAllInfo';
import { IFilmPromo } from '../data/abstractions/IFilmPromo';

export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<IFilmData[]>(Endpoints.getFilms());
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
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
      await api.get(Endpoints.checkAuth());
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
    const {data: {token}} = await api.post<IUserData>(Endpoints.login(), {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(Endpoints.logout());
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Login));
  },
);

export const fetchFilm = createAsyncThunk<
  void,
  { filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  '/films/id',
  async ({filmId}, { dispatch, extra: api }) => {
    const { data } = await api.get<IFilmAllInfo>(Endpoints.getFilm(filmId));
    dispatch(loadFilm(data));
  });

export const fetchPromo = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  '/promo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<IFilmPromo>('/promo');
    dispatch(loadPromo(data));
  });
