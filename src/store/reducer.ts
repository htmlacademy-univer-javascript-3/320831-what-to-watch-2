import Catalog from '../data/enums/catalog';
import { createReducer } from '@reduxjs/toolkit';
import {
  setGenre,
  getFilmsByGenre,
  moreFilms,
  resetFilmCount,
  loadFilms,
  setFilmsDataLoadingStatus,
  requireAuthorization,
  loadPromo,
  loadFilm,
  setFilmDataLoadingStatus,
  resetFilm,
  loadSimilarFilms,
  loadReviewsFilm
} from './action';
import { FILM_STEP } from '../data/constants/film-step';
import { IFilmData } from '../data/abstractions/IFilmData';
import { AuthorizationStatus } from '../data/enums/authorization-status';
import { IFilmPromo } from '../data/abstractions/IFilmPromo';

import { IFilmAllInfo } from '../data/abstractions/IFilmAllInfo';
import { IReview } from '../data/abstractions/IReview';
import genreDictionary from '../utils/genre-dictionary';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  genre: Catalog;
  films: IFilmData[];
  promo: IFilmPromo | null;
  film: IFilmAllInfo | null;
  allFilms: IFilmData[];
  similarFilms: IFilmData[];
  reviewsFilm: IReview[];
  filmCount: number;
  allFilmCount: number;
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  genre: Catalog.All,
  films: [],
  allFilms: [],
  film: null,
  similarFilms: [],
  reviewsFilm: [],
  promo: null,
  filmCount: FILM_STEP,
  allFilmCount: 0,
  isFilmsDataLoading: false,
  isFilmDataLoading: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if(state.genre === Catalog.All) {
        state.films = state.allFilms.slice(0, state.filmCount);
        state.allFilmCount = state.films.length;
      } else {
        state.films = state.allFilms.filter((f)=> genreDictionary[state.genre].includes(f.genre)).slice(0, state.filmCount);
        state.allFilmCount = state.allFilms.filter((f)=>f.genre === state.genre).length;
      }
    })
    .addCase(moreFilms, (state) => {
      state.filmCount = state.filmCount + FILM_STEP;
    })
    .addCase(resetFilmCount, (state) =>{
      state.filmCount = FILM_STEP;
    })
    .addCase(loadFilms, (state, action) =>{
      state.allFilms = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadPromo, (state, action) => {
      state.promo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviewsFilm, (state, action) => {
      state.reviewsFilm = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(resetFilm, (state) => {
      state.film = null;
      state.similarFilms = [];
      state.reviewsFilm = [];
      state.isFilmDataLoading = false;
    });
});

export { reducer };
