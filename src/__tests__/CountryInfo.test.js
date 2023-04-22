import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CountryInfo = () => (
  <div>
    <h1>CountryInfo</h1>
  </div>
);

describe('CountryInfo', () => {
  test('render React component', () => {
    render(<CountryInfo />);
    expect(screen.getByText('CountryInfo')).toBeInTheDocument();
  });
});