import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Content = () => (
  <div>
    <h1>Content</h1>
  </div>
);

describe('Content', () => {
  test('render React component', () => {
    render(<Content />);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
