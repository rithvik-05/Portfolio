import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';

test('header renders site owner name', () => {
  render(<Header />);
  const h1 = screen.getByRole('heading', { level: 1, name: /Rithvik Reddy/i });
  expect(h1).toBeTruthy();
});
