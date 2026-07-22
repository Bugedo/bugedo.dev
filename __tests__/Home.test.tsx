import { render, screen } from '@testing-library/react';
import Home from '../app/page';
import { LocaleProvider } from '@/hooks/useLocale';

function renderHome() {
  return render(
    <LocaleProvider>
      <Home />
    </LocaleProvider>,
  );
}

describe('Home page', () => {
  it('renders hero name', () => {
    renderHome();
    expect(screen.getByRole('heading', { name: /Nicolás Bugedo/i })).toBeInTheDocument();
  });

  it('renders experience section', () => {
    renderHome();
    expect(screen.getByText(/# Experience/i)).toBeInTheDocument();
  });
});
