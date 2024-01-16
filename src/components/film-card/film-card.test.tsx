import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { testFilms } from '../../mocks/mocks.ts';
import { RootState } from '../../store';
import { FilmCardMemo } from './film-card.tsx';
import { Film } from '../../pages/film/film.tsx';

describe('FilmCard', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);
  const store = mockStore({
    [EReducers.Auth]: {
      authorizationStatus: {
        apiData: true,
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
      user: {
        apiData: {
          email:'tomilin229@gmail.com',
          token:'dG9taWxpbjIyOUBnbWFpbC5jb20=',
          name:'tomilin229',
          avatarUrl:'https://13.design.htmlacademy.pro/static/avatar/3.jpg' ,
        },
        apiStatus: null,
        apiError: null,
      },
    },
    [EReducers.Films]: {
      film: {
        apiData: testFilms[0],
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
      reviews: {
        apiData: null,
        apiStatus: null,
        apiError: null,
      },
      similar: {
        apiData: null,
        apiStatus: null,
        apiError: null,
      },
      favoriteFilms: {
        apiData: [],
        apiStatus: ApiStatusPendingEnum.LOAD,
        apiError: null,
      },
    }
  });


  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilmCardMemo film={testFilms[0]} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(testFilms[0].name)).toBeInTheDocument();
  });

  it('should redirect to filmPage by click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'/film/1'} element={<Film />}/>
            <Route path='*' element={<FilmCardMemo film={testFilms[0]} />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );


    expect(screen.getByText(testFilms[0].name)).toBeInTheDocument();
    expect(screen.getByText(testFilms[0].genre)).toBeInTheDocument();
  });
});
