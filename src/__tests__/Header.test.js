import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Header = () => (
  <div>
    <h1>Header</h1>
  </div>
);

describe('Header', () => {
  test('render Header component', () => {
    render(<Header />);
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});