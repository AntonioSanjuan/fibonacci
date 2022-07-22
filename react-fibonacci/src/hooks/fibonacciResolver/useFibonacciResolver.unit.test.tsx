import { renderHook } from '@testing-library/react';
import useFibonacciResolver from './useFibonacciResolver';

describe('<useFibonacciResolver />', () => {
    it('should create', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      expect(result.current).toBeDefined();
    });

    it('resolveByIndex() output shoult be Array', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(10)
        expect(Array.isArray(sut)).toBe(true)     
    });

    it('resolveByIndex(0) output should be [0]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(0)
        const expectedResult: number[] = [0]

        expect(sut).toEqual(expectedResult)    
    });

    it('resolveByIndex(1) output should be [0, 1]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(0)
        const expectedResult: number[] = [0, 1]

        expect(sut).toEqual(expectedResult)    
    });


    it('resolveByIndex(5) output should be [0, 1, 1, 2, 3, 5]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(10)
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5]

        expect(sut).toEqual(expectedResult)
    });

    it('resolveByIndex(10) output should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolveByIndex(10)
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(sut).toEqual(expectedResult)
    });
});