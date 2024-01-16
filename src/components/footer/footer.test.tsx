import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import { Footer } from './footer';

describe('Footer', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Footer/>
      </BrowserRouter>
    );

    expect(screen.getByText('© 2019 What to watch Ltd.')).toBeInTheDocument();
  });
});
