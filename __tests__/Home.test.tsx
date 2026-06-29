import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  it('renders hero headline', () => {
    render(<Home />);
    expect(screen.getByText(/I build software/i)).toBeInTheDocument();
  });

  it('renders what I do section', () => {
    render(<Home />);
    expect(screen.getByText(/What I do/i)).toBeInTheDocument();
  });
});
