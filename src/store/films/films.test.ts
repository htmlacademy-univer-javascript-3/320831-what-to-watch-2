import { describe } from 'vitest';
import { IFilmsState, initialState, filmSlice } from './film-slices.ts';
import { setGenre } from '../action.ts';
import { ECatalog } from '../../types/catalog.ts';
import { fetchFilm } from '../api-actions.ts';
import { testFilms } from '../../mocks/mocks.ts';
import { ApiStatusPendingEnum } from '../../types/api.ts';

describe('films-slices', ()=>{
  let state: IFilmsState;

  beforeAll(()=>{
    state = initialState;
  });

  it('without additional parameters should return initial state', () => {
    expect(filmSlice.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  describe('setGenre', ()=> {
    it('should set genre', () => {
      expect(filmSlice.reducer(state, { type: setGenre.type, payload: {genre: ECatalog.All}}).genre)
        .toEqual({genre: 'All genres'});
    });
  });

  describe('fetchFilm test', () => {
    it('should set isLoading on pending', () => {
      expect(filmSlice.reducer(state, { type: fetchFilm.pending.type, payload: testFilms[0] }).film)
        .toEqual({
          apiData: null,
          apiStatus: ApiStatusPendingEnum.LOADING,
          apiError: null,
        });
    });
    it('should load film on fulfilled', () => {
      expect(filmSlice.reducer(state, { type: fetchFilm.fulfilled.type, payload: testFilms[0] }).film)
        .toEqual({
          apiData: testFilms[0],
          apiStatus: ApiStatusPendingEnum.LOAD,
          apiError: null,
        });
    });
  });
});
