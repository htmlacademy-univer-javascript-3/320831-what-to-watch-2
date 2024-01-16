
import thunk, { ThunkDispatch } from 'redux-thunk';
import { Action } from '@reduxjs/toolkit';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { createAPI } from '../../services/api.ts';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../../store';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { HistoryRouter } from '../history-router/history-router.tsx';
import { PrivateRoute } from './private-route.tsx';


const api = createAPI();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  RootState,
  Action,
  ThunkDispatch<RootState, typeof api, Action>
>(middlewares);


const history = createMemoryHistory();

describe('PrivateRoute', () => {
  beforeEach(() => {
    history.push('/privateRoute');
  });

  it('should render component in private route, when AuthorizationStatus is Auth', () => {
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
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={'/login'} element={<p>Login Page</p>}/>
            <Route path={'/privateRoute'} element={
              <PrivateRoute>
                <p>Private Route</p>
              </PrivateRoute>
            }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Login Page/i)).not.toBeInTheDocument();
  });

  it('should navigate to SignInPage, when AuthorizationStatus is NoAuth', () => {
    const store = mockStore({
      [EReducers.Auth]: {
        authorizationStatus: {
          apiData: null,
          apiStatus: ApiStatusPendingEnum.ERROR,
          apiError: true,
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
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route path={'/login'} element={<p>Login Page</p>}/>
            <Route path={'/privateRoute'} element={
              <PrivateRoute>
                <p>Private Route</p>
              </PrivateRoute>
            }
            />
          </Routes>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });
});
