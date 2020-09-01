import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders users list page by default', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Users/);
  expect(linkElement).toBeInTheDocument();
});
