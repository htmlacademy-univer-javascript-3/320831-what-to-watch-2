import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { testFilms } from '../../mocks/mocks.ts';
import { RootState } from '../../store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { createAPI } from '../../services/api.ts';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { DetailsMemo } from './details.tsx';
import { BrowserRouter } from 'react-router-dom';


describe('details', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);
  const store = mockStore({
    [EReducers.Films]: {
      films: {
        apiData: testFilms,
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
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
          <DetailsMemo />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Director')).toBeInTheDocument();
  });
});
