const iterativeResolve = (fibonacciIndex: number): number[] => {
    return [0, 1];
}
const recursiveResolve = (fibonacciIndex: number): number[] => {
    return [0, 1];
}

export const useFibonacciResolver = () => {
    const resolve = (fibonacciIndex: number, recursive: boolean = false): number[] => {
        return recursive ? 
            recursiveResolve(fibonacciIndex) : 
            iterativeResolve(fibonacciIndex)
    }

    return {
        resolve
    }
}

