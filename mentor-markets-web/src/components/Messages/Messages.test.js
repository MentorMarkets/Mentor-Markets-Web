import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Messages from './Messages';

describe('<Messages />', () => {
  test('it should mount', () => {
    render(<Messages />);
    
    const messages = screen.getByTestId('Messages');

    expect(messages).toBeInTheDocument();
  });
});