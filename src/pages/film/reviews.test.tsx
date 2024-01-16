import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { testReviews } from '../../mocks/mocks.ts';
import { RootState } from '../../store';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { ApiStatusPendingEnum, EReducers } from '../../types/api.ts';
import { createAPI } from '../../services/api.ts';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ReviewsMemo } from './reviews.tsx';


describe('reviews', () => {
  const api = createAPI();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    RootState,
    Action,
    ThunkDispatch<RootState, typeof api, Action>
  >(middlewares);
  const store = mockStore({
    [EReducers.Films]: {
      reviews: {
        apiData: testReviews,
        apiError: false,
        apiStatus: ApiStatusPendingEnum.LOAD
      },
    }
  });

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ReviewsMemo />
        </BrowserRouter>
      </Provider>
    );

    const reviewTextElements = screen.queryAllByText(
      'It\'s a good film for watching with your family. My daughter was in a perfect mood all day after watching, thanks for it!'
    );

    expect(reviewTextElements.length).toBeGreaterThan(0);
  });
});
