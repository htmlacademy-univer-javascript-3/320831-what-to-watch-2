import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './index.ts';
import { AxiosInstance } from 'axios';
import { IUser } from '../types/user.ts';
import { Film } from '../types/film.ts';
import { IReview } from '../types/review.ts';

export const getAuthorizationStatus = createAsyncThunk<
  IUser,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'auth/getAuthorizationStatus',
  async (_, { extra: api }) => {
    const { data } = await api.get<IUser>('/login');
    return data;
  },
);

export const login = createAsyncThunk<IUser, { email: string; password: string }, { dispatch: AppDispatch; state: RootState; extra: AxiosInstance }>(
  'auth/login',
  async ({ email, password }, { extra: api }) => {
    const { data } = await api.post<IUser>('/login', { email, password });
    return data;
  },
);
export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'auth/logout',
  async (_, { extra: api }) => {
    await api.delete('/logout');
  },
);


export const fetchMovies = createAsyncThunk<
  Film[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchMovies',
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>('/films');
    return data;
  }
);


export const fetchFilm = createAsyncThunk<
  Film,
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchFilm',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Film>(`/films/${filmId}`);
    return data;
  }
);

export const fetchFavoriteFilms = createAsyncThunk<
    Film[],
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchFavoriteFilms',
  async (_, { extra: api }) => {
    const { data } = await api.get<Film[]>('/favorite');
    return data;
  }
);

export const fetchPromo = createAsyncThunk<
  Film,
  undefined,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchPromo',
  async (_, { extra: api }) => {
    const { data } = await api.get<Film>('/promo');
    return data;
  }
);

export const fetchReviews = createAsyncThunk<
  IReview[],
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchReviews',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<IReview[]>(`/comments/${filmId}`);
    return data;
  }
);

export const fetchSimilar = createAsyncThunk<
  Film[],
  string,
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/fetchSimilar',
  async (filmId: string, { extra: api }) => {
    const { data } = await api.get<Film[]>(`/films/${filmId}/similar`);
    return data;
  }
);

export const setFavorite = createAsyncThunk<
  Film,
  { status: boolean; filmId: string },
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'films/setFavorite',
  async ({ status, filmId }, {extra: api}) => {
    const { data } = await api.post<Film>(
      `/favorite/${filmId}/${status ? 1 : 0}`
    );
    return data;
  }
);

export const addReview = createAsyncThunk<
  { redirectToFilm: () => void },
  { comment: string; rating: number; filmId: string; redirectToFilm: () => void },
  {
    dispatch: AppDispatch;
    state: RootState;
    extra: AxiosInstance;
  }
    >(
    'films/addReview',
    async ({ comment, rating, filmId, redirectToFilm }, { extra: api }) => {
      await api.post<IReview>(`/comments/${filmId}`, { comment, rating });
      return { redirectToFilm };
    }
    );
