import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import {
  loadFilm,
  loadFilms,
  loadPromo,
  loadReviewsFilm,
  loadSimilarFilms,
  redirectToRoute,
  requireAuthorization,
  setFilmDataLoadingStatus,
  setFilmsDataLoadingStatus
} from './action';
import { IFilmData } from '../data/abstractions/IFilmData';
import { AuthorizationStatus } from '../data/enums/authorization-status';
import { AuthData } from '../data/types/auth-data';
import { IUserData } from '../data/abstractions/IUserData';
import { dropToken, saveToken } from '../services/token';
import { AppRoute } from '../data/enums/app-route';
import { IFilmAllInfo } from '../data/abstractions/IFilmAllInfo';
import { IFilmPromo } from '../data/abstractions/IFilmPromo';
import { AppDispatch, State } from '../data/types/store';
import { IReview } from '../data/abstractions/IReview';
import {
  getFilms,
  checkAuth,
  logout,
  getFilm,
  getSimilarFilms,
  getReviewsFilm,
  getPromo,
  login
} from '../services/endpoints';

export const fetchFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const { data } = await api.get<IFilmData[]>(getFilms());
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
      await api.get(checkAuth());
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
    const {data: {token}} = await api.post<IUserData>(login(), {email, password});
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
    await api.delete(logout());
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
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
  'data/loadFilm',
  async ({filmId}, { dispatch, extra: api }) => {
    dispatch(setFilmDataLoadingStatus(true));
    try {
      const { data } = await api.get<IFilmAllInfo>(getFilm(filmId));
      dispatch(loadFilm(data));
    } catch(e) {
      dispatch(loadFilm(null));
    } finally {
      dispatch(setFilmDataLoadingStatus(false));
    }


  });

export const fetchSimilarFilm = createAsyncThunk<
  void,
  { filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/loadSimilarFilms',
  async ({ filmId }, { dispatch, extra: api }) => {
    const { data } = await api.get<IFilmData[]>(getSimilarFilms(filmId));
    dispatch(loadSimilarFilms(data));
  });

export const fetchReviewsFilm = createAsyncThunk<
  void,
  { filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/loadReviewsFilm',
  async ({ filmId }, { dispatch, extra: api }) => {
    const { data } = await api.get<IReview[]>(getReviewsFilm(filmId));
    dispatch(loadReviewsFilm(data));
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
  'data/loadPromo',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<IFilmPromo>(getPromo());
    dispatch(loadPromo(data));
  });

export const addReview = createAsyncThunk<
  void,
  { comment: string; rating: number; filmId: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('/comments/id', async ({ comment, rating, filmId }, { extra: api }) => {
  await api.post(`/comments/${filmId}`, { comment, rating });
});
