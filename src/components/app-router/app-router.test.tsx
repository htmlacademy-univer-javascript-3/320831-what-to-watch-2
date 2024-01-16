import thunk from 'redux-thunk';

import { Provider } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../../services/api.ts';
import { testFilms } from '../../mocks/mocks.ts';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { ECatalog } from '../../types/catalog.ts';
import { AppRouter } from './app-router.tsx';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  RootState,
  Action,
  ThunkDispatch<RootState, typeof api, Action>
>(middlewares);


describe('Application Routing', () => {
  const store = mockStore({
    [EReducers.Auth]: {
      authorizationStatus: {
        apiData: true,
        apiStatus: ApiStatusPendingEnum.LOAD,
        apiError: null,
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
      genre: ECatalog.All,
      films: {
        apiData: testFilms,
        apiStatus:ApiStatusPendingEnum.LOAD,
        apiError: null,
      },
      film: {
        apiData: testFilms[0],
        apiStatus: ApiStatusPendingEnum.LOAD,
        apiError: null,
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
      promo: {
        apiData: testFilms[0],
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
    }
  });
  const routes = ['/'];

  const fakeApp = (
    <Provider store={store}>
      <MemoryRouter initialEntries={routes}>
        <AppRouter />
      </MemoryRouter>
    </Provider>
  );

  it('should render main page if navigate to "/"', () => {
    render(fakeApp);
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render main page if navigate to "/login"', () => {
    routes.push('/login');
    render(fakeApp);

    expect(screen.getByText(/Play/i)).toBeInTheDocument();
    expect(screen.getByText(/All genres/i)).toBeInTheDocument();
  });

  it('should render player if navigate to "/player/{id}"', () => {
    routes.push('/player/1');
    render(fakeApp);

    expect(screen.getByText(/Exit/i)).toBeInTheDocument();
  });

  it('should render reviews editor if navigate to "/films/{id}/review"', () => {
    routes.push('/films/1/review');
    render(fakeApp);

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
  });

  it('should render favorites list if navigate to "/mylist"', () => {
    routes.push('/mylist');
    render(fakeApp);
    const pageTitle = screen.getByText('My list', { selector: '#my-list-title' });
    expect(pageTitle).toBeInTheDocument();
  });

  it('should render 404 Not Found if navigate to not found route', () => {
    routes.push('/kek');
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
  });
});
