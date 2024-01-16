import { createAPI } from '../../services/api.ts';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../../store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import UserBlock from './user-block.tsx';

describe('user-block', () => {
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
    }});

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserBlock />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
