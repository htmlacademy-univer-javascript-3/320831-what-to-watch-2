import { render, screen } from '@testing-library/react';
import { Page404 } from './page-404.tsx';
import { BrowserRouter } from 'react-router-dom';


describe('page404', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Page404 />
      </BrowserRouter>
    );

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
