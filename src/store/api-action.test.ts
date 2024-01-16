import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { RootState } from './index.ts';
import {
  addReview, fetchFavoriteFilms,
  fetchFilm,
  fetchMovies,
  fetchPromo, fetchReviews,
  fetchSimilar,
  getAuthorizationStatus,
  login,
  logout, setFavorite
} from './api-actions.ts';
import { testFilms, testReviews } from '../mocks/mocks.ts';

describe('Async action', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    RootState,
    Action<string>,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);


  const data = {email: 'tomilin229@gmail.com', password: '1Q'};

  it('GET /login', async () => {
    const store = mockStore();
    mockAPI
      .onGet('/login')
      .reply(200);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(getAuthorizationStatus());

    const actions = store.getActions().map((action) => action.type);

    expect(actions).toEqual([
      getAuthorizationStatus.pending.type,
      getAuthorizationStatus.fulfilled.type
    ]);
  });

  it('POST /login', async () => {
    mockAPI
      .onPost('/login')
      .reply(200, { token: 'token' });


    const store = mockStore();

    await store.dispatch(login(data));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      login.pending.type,
      login.fulfilled.type
    ]);
  });

  it('DELETE /logout', async () => {
    mockAPI
      .onDelete('/logout')
      .reply(204);

    const store = mockStore();

    await store.dispatch(logout());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logout.pending.type,
      logout.fulfilled.type
    ]);
  });

  it('GET /films', async () => {
    mockAPI
      .onGet('/films')
      .reply(200, testFilms);

    const store = mockStore();

    await store.dispatch(fetchMovies());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchMovies.pending.type,
      fetchMovies.fulfilled.type
    ]);
  });

  it('GET /promo', async () => {
    mockAPI
      .onGet('/promo')
      .reply(200, testFilms[0]);

    const store = mockStore();

    await store.dispatch(fetchPromo());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchPromo.pending.type,
      fetchPromo.fulfilled.type
    ]);
  });

  it('GET /films/{id}', async () => {
    mockAPI
      .onGet('/films/1')
      .reply(200, testFilms[0]);

    const store = mockStore();

    await store.dispatch(fetchFilm('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFilm.pending.type,
      fetchFilm.fulfilled.type
    ]);
  });

  it('GET /films/{id}/similar', async () => {
    mockAPI
      .onGet('/films/1/similar')
      .reply(200, fetchSimilar('1'));

    const store = mockStore();

    await store.dispatch(fetchSimilar('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchSimilar.pending.type,
      fetchSimilar.fulfilled.type
    ]);
  });

  it('GET /comments/{id}', async () => {
    mockAPI
      .onGet('/comments/1')
      .reply(200, testReviews);

    const store = mockStore();

    await store.dispatch(fetchReviews('1'));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchReviews.pending.type,
      fetchReviews.fulfilled.type
    ]);
  });

  it('GET /favorite', async () => {
    mockAPI
      .onGet('/favorite')
      .reply(200, testFilms);

    const store = mockStore();

    await store.dispatch(fetchFavoriteFilms());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchFavoriteFilms.pending.type,
      fetchFavoriteFilms.fulfilled.type
    ]);
  });

  it('POST /favorite/{filmId}/{status}', async () => {
    const postData = {
      filmId: '1',
      status: true,
    };

    mockAPI
      .onPost('/favorite/1/1')
      .reply(200);

    const store = mockStore();

    await store.dispatch(setFavorite(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      setFavorite.pending.type,
      setFavorite.fulfilled.type
    ]);
  });

  it('POST /comments/{id}', async () => {

    const redirectToFilm = () => null;

    const postData = {
      filmId: '1',
      comment: 'text',
      rating: 4.4,
      redirectToFilm: redirectToFilm,
    };

    mockAPI
      .onPost(`/comments/${postData.filmId}`, {
        comment: postData.comment,
        rating: postData.rating
      })
      .reply(200);

    const store = mockStore();

    await store.dispatch(addReview(postData));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      addReview.pending.type,
      addReview.fulfilled.type
    ]);
  });
});
