import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading', () => {
  render(<App />);
  const heading = screen.getByText(/Book Searching Tool/i);
  expect(heading).toBeInTheDocument();
});

test('renders label', () => {
  render(<App />);
  const label = screen.getByText(/Enter book title/i);
  expect(label).toBeInTheDocument();
});
