import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { testFilms } from '../../mocks/mocks.ts';
import { RootState } from '../../store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { createAPI } from '../../services/api.ts';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { OverviewMemo } from './overview.tsx';


describe('overview', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);
  const store = mockStore({
    [EReducers.Films]: {
      film: {
        apiData: testFilms[0],
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OverviewMemo />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(`Director: ${testFilms[0].director}`)).toBeInTheDocument();
  });
});
