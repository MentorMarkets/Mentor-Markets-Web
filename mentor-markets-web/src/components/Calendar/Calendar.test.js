import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calendar from './Calendar';

describe('<Calendar />', () => {
  test('it should mount', () => {
    render(<Calendar />);
    
    const calendar = screen.getByTestId('Calendar');

    expect(calendar).toBeInTheDocument();
  });
});