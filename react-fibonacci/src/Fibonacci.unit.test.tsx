import { render, screen } from '@testing-library/react';
import Fibonacci from './Fibonacci';

describe('<Fibonacci />', () => {
  beforeEach(() => {

  });

  it('should create', () => {
    const { container } = render(
      <Fibonacci />
    );

    expect(container).toBeDefined();
  });
});