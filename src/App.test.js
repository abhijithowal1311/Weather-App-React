import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import App from './App';

test('renders learn react link', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const todatTitle = screen.getByText(/Weather today/i);
  expect(todatTitle).toBeInTheDocument();
  const graphTitle = screen.getByText(/Weather Graph/i);
  expect(graphTitle).toBeInTheDocument();
});
