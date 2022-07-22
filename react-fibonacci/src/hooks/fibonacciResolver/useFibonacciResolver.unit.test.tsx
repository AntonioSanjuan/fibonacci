import { renderHook } from '@testing-library/react';
import {useFibonacciResolver} from './useFibonacciResolver';

describe('<useFibonacciResolver />', () => {
    it('should create', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      expect(result.current).toBeDefined();
    });

    it('resolve() output shoult be Array', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10)
        expect(Array.isArray(sut)).toBe(true)     
    });

    it('ITERATIVE resolve(0) output should be [0]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(0)
        const expectedResult: number[] = [0]

        expect(sut).toEqual(expectedResult)    
    });

    it('ITERATIVE resolve(1) output should be [0, 1]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(1)
        const expectedResult: number[] = [0, 1]

        expect(sut).toEqual(expectedResult)    
    });


    it('ITERATIVE resolve(5) output should be [0, 1, 1, 2, 3, 5]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(5)
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5]

        expect(sut).toEqual(expectedResult)
    });

    it('ITERATIVE resolve(10) output should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10)
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(sut).toEqual(expectedResult)
    });
});