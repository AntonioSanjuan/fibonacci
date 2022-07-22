const INIT_STATE = [0, 1]

const iterativeResolve = (requestedIndex: number): number[] => {
    if(requestedIndex <= 0) return [INIT_STATE[0]]
    if(requestedIndex === 1) return INIT_STATE

    let output = [...INIT_STATE];

    for(let currentIndex = 1; currentIndex < requestedIndex; currentIndex++) {
        output.push(output[currentIndex] + output[currentIndex - 1])
    }

    return output;
}
const recursiveResolve = (fibonacciIndex: number): number[] => {
    return INIT_STATE;
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

