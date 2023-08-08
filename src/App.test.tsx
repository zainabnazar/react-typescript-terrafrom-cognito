import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from './App';

describe('App Component', () => {
  test('Renders "Cognito Test" text', () => {
    render(
      <App />
    );

    expect(screen.getByText('Cognito Test')).toBeInTheDocument();
    
  });

  test('Renders "STATUS: NOT LOGIN" text', () => {
    render(
      <App />
    );

    expect(screen.getByText('STATUS: NOT LOGIN')).toBeInTheDocument();
  });

});
