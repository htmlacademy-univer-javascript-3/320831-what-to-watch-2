import { render, screen } from '@testing-library/react';
import { Tabs } from './tabs.tsx';
import { ITab } from './types.ts';
import { OverviewMemo } from '../../pages/film/overview.tsx';
import { DetailsMemo } from '../../pages/film/details.tsx';
import { ReviewsMemo } from '../../pages/film/reviews.tsx';
import { createAPI } from '../../services/api.ts';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { RootState } from '../../store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { testFilms } from '../../mocks/mocks.ts';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('tabs', () => {

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

  const tabs: ITab[] = [
    {
      label: 'Overview',
      component: <OverviewMemo />
    },
    {
      label: 'Details',
      component: <DetailsMemo />
    },
    {
      label: 'Reviews',
      component: <ReviewsMemo />
    }
  ];


  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Tabs tabs={tabs} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Overview')).toBeInTheDocument();
  });
});
