import { renderHook } from '@testing-library/react';
import {useFibonacciResolver} from './useFibonacciResolver';

describe('<useFibonacciResolver />', () => {
    it('should create', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      expect(result.current).toBeDefined();
    });

    it('resolve() output shoult be Array', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10, 'iterative')
        expect(Array.isArray(sut)).toBe(true)     
    });

    it('ITERATIVE resolve(-5) output should be [0]', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      const sut = result.current.resolve(-5, 'iterative')
      const expectedResult: number[] = [0]

      expect(sut).toEqual(expectedResult)    
    });

    it('ITERATIVE resolve(0) output should be [0]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(0, 'iterative')
        const expectedResult: number[] = [0]

        expect(sut).toEqual(expectedResult)    
    });

    it('ITERATIVE resolve(1) output should be [0, 1]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(1, 'iterative')
        const expectedResult: number[] = [0, 1]

        expect(sut).toEqual(expectedResult)    
    });

    it('ITERATIVE resolve(5) output should be [0, 1, 1, 2, 3, 5]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(5, 'iterative')
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5]

        expect(sut).toEqual(expectedResult)
    });

    it('ITERATIVE resolve(10) output should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10, 'iterative')
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(sut).toEqual(expectedResult)
    });

    it('ITERATIVE resolve(10000) should set error FALSE', () => {
        const { result, rerender  } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10000, 'iterative')
        rerender()

        expect(result.current.error).toBeFalsy();
    });

    it('RECURSIVE resolve(-5) output should be [0]', () => {
      const { result } = renderHook(() => useFibonacciResolver());
  
      const sut = result.current.resolve(-5, 'recursive')
      const expectedResult: number[] = [0]

      expect(sut).toEqual(expectedResult)    
  });
    it('RECURSIVE resolve(0) output should be [0]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(0, 'recursive')
        const expectedResult: number[] = [0]

        expect(sut).toEqual(expectedResult)    
    });

    it('RECURSIVE resolve(1) output should be [0, 1]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(1, 'recursive')
        const expectedResult: number[] = [0, 1]

        expect(sut).toEqual(expectedResult)    
    });


    it('RECURSIVE resolve(5) output should be [0, 1, 1, 2, 3, 5]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(5, 'recursive')
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5]

        expect(sut).toEqual(expectedResult)
    });

    it('RECURSIVE resolve(10) output should be [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]', () => {
        const { result } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10, 'recursive')
        const expectedResult: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

        expect(sut).toEqual(expectedResult)
    });

    
    it('RECURSIVE resolve(10000) should set error TRUE', () => {
        const { result, rerender  } = renderHook(() => useFibonacciResolver());
    
        const sut = result.current.resolve(10000, 'recursive')
        rerender()
        const expectedResult: number[] = []

        expect(sut).toEqual(expectedResult)
        expect(result.current.error).toBeTruthy();
    });
});