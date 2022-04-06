import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginButton_Auth0 from './LoginButton_Auth0';

describe('<LoginButton_Auth0 />', () => {
  test('it should mount', () => {
    render(<LoginButton_Auth0 />);
    
    const loginButtonAuth0 = screen.getByTestId('LoginButton_Auth0');

    expect(loginButtonAuth0).toBeInTheDocument();
  });
});