import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LogoutButton_Auth0 from './LogoutButton_Auth0';

describe('<LogoutButton_Auth0 />', () => {
  test('it should mount', () => {
    render(<LogoutButton_Auth0 />);
    
    const logoutButtonAuth0 = screen.getByTestId('LogoutButton_Auth0');

    expect(logoutButtonAuth0).toBeInTheDocument();
  });
});