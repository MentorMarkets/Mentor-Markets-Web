import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Jobs from './Jobs';

describe('<Jobs />', () => {
  test('it should mount', () => {
    render(<Jobs />);
    
    const jobs = screen.getByTestId('Jobs');

    expect(jobs).toBeInTheDocument();
  });
});