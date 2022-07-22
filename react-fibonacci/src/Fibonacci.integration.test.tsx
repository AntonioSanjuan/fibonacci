import { render, screen, fireEvent } from '@testing-library/react';
import Fibonacci from './Fibonacci';
import * as hooks from './hooks/fibonacciResolver/useFibonacciResolver';

import { useFibonacciResolverMock } from './hooks/fibonacciResolver/useFibonacciResolver.mock';

describe('<Fibonacci />', () => {
  beforeEach(() => {
    jest.spyOn(hooks, 'useFibonacciResolver')
      .mockImplementation(useFibonacciResolverMock);
  });

  it('should create', () => {
    const { container } = render(
      <Fibonacci />
    );

    expect(container).toBeDefined();
  });

  it('useFibonacciResolver resolveByIndex should be called once CALCULATE button has been clicked', () => {
    render(
      <Fibonacci />
    );

    const calculateButton = screen.getByRole('button', { name: /Calculate/i });  
    fireEvent.click(calculateButton);

    expect(useFibonacciResolverMock().resolveByIndex).toHaveBeenCalled();
  });

  it('useFibonacciResolver resolveByIndex should be called with the <input /> value', () => {
    render(
      <Fibonacci />
    );
    const sut = 25

    const usernameInput = screen.getByLabelText('Fibonacci index')
    fireEvent.change(usernameInput, { target: { value: sut } });
    const calculateButton = screen.getByRole('button', { name: /Calculate/i });  
    fireEvent.click(calculateButton);

    expect(useFibonacciResolverMock().resolveByIndex).toHaveBeenCalledWith(sut);
  });
});