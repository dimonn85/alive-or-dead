import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Тест для проверки наличия заголовка
test('renders the title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Test Game of Life/i);
  expect(titleElement).toBeInTheDocument();
});