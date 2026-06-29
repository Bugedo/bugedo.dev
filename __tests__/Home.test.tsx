import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home page', () => {
  it('renders work experience section', () => {
    render(<Home />);
    expect(screen.getByText(/Work Experience/i)).toBeInTheDocument();
  });
});
