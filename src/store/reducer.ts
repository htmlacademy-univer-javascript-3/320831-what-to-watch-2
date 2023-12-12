import Catalog from '../data/enums/catalog';
import { films } from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import { setGenre, getFilmsByGenre, moreFilms, resetFilmCount } from './action';
import { FILM_STEP } from '../data/constants/film-step';

const initialState = {
  genre: Catalog.All,
  films,
  filmCount: FILM_STEP,
  allFilmCount: films.length
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if(state.genre === Catalog.All) {
        state.films = films.slice(0, state.filmCount);
        state.allFilmCount = films.length;
      } else {
        state.films = films.filter((f)=>f.genre === state.genre).slice(0, state.filmCount);
        state.allFilmCount = films.filter((f)=>f.genre === state.genre).length;
      }
    }).addCase(moreFilms, (state) => {
      state.filmCount = state.filmCount + FILM_STEP;
    }).addCase(resetFilmCount, (state) =>{
      state.filmCount = FILM_STEP;
    });
});

export { reducer };
