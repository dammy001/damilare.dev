import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders mainpage link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByButton(/work/i);
  expect(linkElement).toBeInTheDocument();
});
