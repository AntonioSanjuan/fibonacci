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

  it('useFibonacciResolver resolve should be called once CALCULATE button has been clicked', () => {
    render(
      <Fibonacci />
    );

    const calculateButton = screen.getByRole('button', { name: /Calculate/i });  
    fireEvent.click(calculateButton);

    expect(useFibonacciResolverMock().resolve).toHaveBeenCalled();
  });

  it('resolve should be called with the <input /> value and isRecursive FALSE if checkbox is not checked', () => {
    render(
      <Fibonacci />
    );
    const sut = 25

    const usernameInput = screen.getByLabelText('Fibonacci index')
    fireEvent.change(usernameInput, { target: { value: sut } });
    const calculateButton = screen.getByRole('button', { name: /Calculate/i });  
    fireEvent.click(calculateButton);

    expect(useFibonacciResolverMock().resolve).toHaveBeenCalledWith(sut, false);
  });

  it('resolve should be called with the <input /> value and isRecursive TRUE if checkbox is checked', () => {
    render(
      <Fibonacci />
    );
    const sut = 25

    const input = screen.getByLabelText('Fibonacci index')
    fireEvent.change(input, { target: { value: sut } });
    
    const recursiveCheckbox = screen.getByLabelText('Recursive execution')
    fireEvent.click(recursiveCheckbox);

    const calculateButton = screen.getByRole('button', { name: /Calculate/i });  
    fireEvent.click(calculateButton);

    expect(useFibonacciResolverMock().resolve).toHaveBeenCalledWith(sut, true);
  });
});