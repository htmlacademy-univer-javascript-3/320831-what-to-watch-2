import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Film } from '../../types/film.ts';
import { ECatalog } from '../../types/catalog.ts';
import { ApiStatusPendingEnum, ApiStatusState, EReducers, initialApiState } from '../../types/api.ts';
import {
  addReview,
  fetchFavoriteFilms,
  fetchFilm,
  fetchMovies,
  fetchPromo,
  fetchReviews,
  fetchSimilar, logout,
  setFavorite
} from '../api-actions.ts';
import { setGenre } from '../action.ts';
import { IReview } from '../../types/review.ts';
import { toast } from 'react-toastify';

export interface IFilmsState {
  genre: string;
  films: ApiStatusState<Film[]>;
  film: ApiStatusState<Film>;
  reviews: ApiStatusState<IReview[]>;
  similar: ApiStatusState<Film[]>;
  favoriteFilms: ApiStatusState<Film[]>;
  promo: ApiStatusState<Film>;
  favoriteCount: number;
}

export const initialState: IFilmsState = {
  genre: ECatalog.All,
  films: initialApiState,
  favoriteFilms: initialApiState,
  film: initialApiState,
  reviews: initialApiState,
  similar: initialApiState,
  promo: initialApiState,
  favoriteCount: 0,
};

export const filmSlice = createSlice({
  name: EReducers.Films,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setGenre, (state, action) => {
        state.genre = action.payload;
      })

      .addCase(fetchMovies.pending, (state) => {
        state.films.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.films.apiStatus = ApiStatusPendingEnum.LOAD;
        state.films.apiData = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.films.apiStatus = ApiStatusPendingEnum.ERROR;
        state.films.apiError = true;
      })


      .addCase(fetchFilm.pending, (state) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchFilm.fulfilled, (state, action: PayloadAction<Film>) => {
        state.film.apiStatus = ApiStatusPendingEnum.LOAD;
        state.film.apiData = action.payload;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.film.apiStatus = ApiStatusPendingEnum.ERROR;
        state.film.apiError = true;
      })
      .addCase(logout.fulfilled, () => ({ ...initialState }))
      .addCase(fetchFavoriteFilms.pending, (state) => {
        state.favoriteFilms.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchFavoriteFilms.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.favoriteFilms.apiStatus = ApiStatusPendingEnum.LOAD;
        state.favoriteFilms.apiData = action.payload;
        state.favoriteCount = action.payload.length;
      })
      .addCase(fetchFavoriteFilms.rejected, (state) => {
        state.favoriteFilms.apiStatus = ApiStatusPendingEnum.ERROR;
        state.favoriteFilms.apiError = true;
        state.favoriteFilms.apiData = null;
        state.favoriteCount = 0;
      })


      .addCase(fetchPromo.pending, (state) => {
        state.promo.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchPromo.fulfilled, (state, action: PayloadAction<Film>) => {
        state.promo.apiStatus = ApiStatusPendingEnum.LOAD;
        state.promo.apiData = action.payload;
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.promo.apiStatus = ApiStatusPendingEnum.ERROR;
        state.favoriteFilms.apiError = true;
      })

      .addCase(setFavorite.fulfilled, (state, action) => {
        if (state.promo.apiData && action.payload.id === state.promo.apiData?.id) {
          state.promo.apiData = action.payload;
        }
        state.film.apiData = action.payload;
        state.favoriteCount += action.payload.isFavorite ? 1 : -1;
      })

      .addCase(fetchReviews.pending, (state) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<IReview[]>) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.LOAD;
        state.reviews.apiData = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews.apiStatus = ApiStatusPendingEnum.ERROR;
        state.favoriteFilms.apiError = true;
      })


      .addCase(fetchSimilar.pending, (state) => {
        state.similar.apiStatus = ApiStatusPendingEnum.LOADING;
      })
      .addCase(fetchSimilar.fulfilled, (state, action: PayloadAction<Film[]>) => {
        state.similar.apiStatus = ApiStatusPendingEnum.LOAD;
        state.similar.apiData = action.payload;
      })
      .addCase(fetchSimilar.rejected, (state) => {
        state.similar.apiStatus = ApiStatusPendingEnum.ERROR;
        state.favoriteFilms.apiError = true;
      })
      .addCase(addReview.fulfilled, (_, action) => {
        action.payload.redirectToFilm();
      })
      .addCase(addReview.rejected, () => {
        toast('Ошибка при отправлении данных');
      });


  },
});
