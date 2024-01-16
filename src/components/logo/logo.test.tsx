import { render, screen } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { HistoryRouter } from '../history-router/history-router.tsx';
import Logo from './logo.tsx';

const history = createMemoryHistory();
history.push('/logo');

describe('Logo', () => {
  it('should redirect to MainScreen, when click by Link', async () => {
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path={'/logo'} element={<Logo />} />
          <Route path={'/'} element={<p>MainPage</p>} />
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText('MainPage')).toBeInTheDocument();
  });
});
