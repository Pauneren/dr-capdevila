import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Paula Nerenberg', () => {
  render(<App />);
  const headingElement = screen.getAllByText(/paula nerenberg/i)[0];
  expect(headingElement).toBeInTheDocument();
});
