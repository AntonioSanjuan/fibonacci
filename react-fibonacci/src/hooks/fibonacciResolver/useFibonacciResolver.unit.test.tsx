import { render, renderHook, screen } from '@testing-library/react';
import useFibonacciResolver from './useFibonacciResolver';

describe('<useFibonacciResolver />', () => {
    it('should create', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      expect(result.current).toBeDefined();
    });

    it('should create', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(10)
        expect(Array.isArray(sut)).toBe(true)     
    });
});