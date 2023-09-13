// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

// import { App, WrappedApp } from './App';
import App from './App';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    // render(<WrappedApp />);
    render(<App />);
    // ACT
    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World !');
  });

  it('Renders NotFound if invalid path', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/test']}>
        <App />
      </MemoryRouter>
    );
    // ACT
    // ASSERT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found page !');
  });
});
