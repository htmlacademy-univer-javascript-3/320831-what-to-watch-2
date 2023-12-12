import { createAction } from '@reduxjs/toolkit';
import Catalog from '../data/enums/catalog';
import { IFilmData } from '../data/abstractions/IFilmData';
import { AuthorizationStatus } from '../data/enums/authorization-status';
import { AppRoute } from '../data/enums/app-route';
import { IFilmPromo } from '../data/abstractions/IFilmPromo';
import { IFilmAllInfo } from '../data/abstractions/IFilmAllInfo';
import { IReview } from '../data/abstractions/IReview';

export const setGenre = createAction<{genre: Catalog}>('film/genre');

export const getFilmsByGenre = createAction('film/fimlByGenre');

export const moreFilms = createAction('film/moreFilms');

export const resetFilmCount = createAction('film/resetFilmCount');

export const loadFilms = createAction<IFilmData[]>('data/loadFilms');

export const loadFilm = createAction<IFilmAllInfo | null>('data/loadFilm');

export const loadSimilarFilms = createAction<IFilmData[]>('data/loadSimilarFilms');

export const loadReviewsFilm = createAction<IReview[]>('data/loadReviewsFilm');

export const resetFilm = createAction('film/resetFilm');

export const loadPromo = createAction<IFilmPromo>('data/loadPromo');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');
