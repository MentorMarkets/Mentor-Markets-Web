import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Account from './Account';

describe('<Account />', () => {
  test('it should mount', () => {
    render(<Account />);
    
    const account = screen.getByTestId('Account');

    expect(account).toBeInTheDocument();
  });
});