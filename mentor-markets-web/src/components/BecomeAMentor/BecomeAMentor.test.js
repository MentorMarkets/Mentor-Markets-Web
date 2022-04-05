import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BecomeAMentor from './BecomeAMentor';

describe('<BecomeAMentor />', () => {
  test('it should mount', () => {
    render(<BecomeAMentor />);
    
    const becomeAMentor = screen.getByTestId('BecomeAMentor');

    expect(becomeAMentor).toBeInTheDocument();
  });
});