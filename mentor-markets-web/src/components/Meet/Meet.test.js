import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Meet from './Meet';

describe('<Meet />', () => {
  test('it should mount', () => {
    render(<Meet />);
    
    const meet = screen.getByTestId('Meet');

    expect(meet).toBeInTheDocument();
  });
});