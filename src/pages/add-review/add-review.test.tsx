
import { createAPI } from '../../services/api';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Action } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { RootState } from '../../store';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { testFilms } from '../../mocks/mocks.ts';
import { AddReview } from './add-review.tsx';

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

describe('AddReview', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReview />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});
