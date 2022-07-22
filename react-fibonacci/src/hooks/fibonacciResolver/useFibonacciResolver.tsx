export const useFibonacciResolver = () => {
    const resolveByIndex = (fibonacciIndex: number, recursive: boolean = false): number[] => {
        return [0, 1]
    }

    return {
        resolveByIndex
    }
}

