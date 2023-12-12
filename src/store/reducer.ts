import Catalog from '../data/enums/catalog';
import { films } from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import { setGenre, getFilmsByGenre, moreFilms, resetFilmCount, loadFilms, setFilmsDataLoadingStatus, requireAuthorization, loadPromo } from './action';
import { FILM_STEP } from '../data/constants/film-step';
import { IFilmData } from '../data/abstractions/IFilmData';
import { AuthorizationStatus } from '../data/enums/authorization-status';
import { IFilmPromo } from '../data/abstractions/IFilmPromo';
import dictionatyGenre from '../utils/dictionary-genre';

type InitialState = {
  authorizationStatus: AuthorizationStatus;
  genre: Catalog;
  films: IFilmData[];
  promo: IFilmPromo | null;
  allFilms: IFilmData[];
  filmCount: number;
  allFilmCount: number;
  isFilmsDataLoading: boolean;
}

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  genre: Catalog.All,
  films: [],
  allFilms: [],
  promo: null,
  filmCount: FILM_STEP,
  allFilmCount: films.length,
  isFilmsDataLoading: false
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
        state.films = state.allFilms.filter((f)=> dictionatyGenre[state.genre].includes(f.genre)).slice(0, state.filmCount);
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
    });
});

export { reducer };
