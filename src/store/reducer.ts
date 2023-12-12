import Catalog from '../data/enums/catalog';
import { films } from '../mocks/films';
import { createReducer } from '@reduxjs/toolkit';
import { setGenre, getFilmsByGenre } from './action';

const initialState = {
  genre: Catalog.All,
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload.genre;
    })
    .addCase(getFilmsByGenre, (state) => {
      if(state.genre === Catalog.All) {
        state.films = films;
      } else {
        state.films = films.filter((f)=>f.genre === state.genre);
      }
    });
});

export { reducer };
