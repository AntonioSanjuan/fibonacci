import { useState } from "react";

const INIT_STATE = [0, 1];

const iterativeResolve = (requestedIndex: number): number[] => {
    let output = [...INIT_STATE];

    for(let currentIndex = 1; currentIndex < requestedIndex; currentIndex++) {
        output.push(output[currentIndex] + output[currentIndex - 1]);
    }

    return output;
}
const recursiveResolve = (fibonacciIndex: number): number[] => {
    if(fibonacciIndex === 1) {
        return [...INIT_STATE];
    }

    const output = recursiveResolve(fibonacciIndex - 1);
    output.push(output[fibonacciIndex - 1] + output[fibonacciIndex - 2]);
    return output;
}

function* generatorFnResolve(arrayOfNumbers: number[]) {
    let index = 0;
    while(index < arrayOfNumbers.length) {
        if(arrayOfNumbers[index] % 2 === 0)
            yield arrayOfNumbers[index];
        index++;
    }
}

const searchPairElements = (): number[] => {
    console.log("searchPairElements")
    const generatorFnInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const generatorFn = generatorFnResolve(generatorFnInput)

    let output: number[] = [];
    let lastResult = generatorFn.next();

    while(!lastResult.done) {
        output.push(lastResult.value)
        lastResult = generatorFn.next();
    }

    console.log("🚀 ~ file: useFibonacciResolver.tsx ~ line 39 ~ output", output)
    return output;
}

export const useFibonacciResolver = () => {
    const [error, setError] = useState<boolean>(false);
    const resolve = (
        fibonacciIndex: number, 
        method
        : 'recursive' | 'iterative' | 'generatorFn'
    ): number[] => {
        setError(false);
        if(fibonacciIndex <= 0) return [INIT_STATE[0]];
        if(fibonacciIndex === 1) return INIT_STATE;
        
        try {
            const sequence = selectMethod[method](fibonacciIndex)
            return sequence;

        }catch (e) {
            setError(true);
            return []
        }
    }

    const selectMethod = {
        recursive: recursiveResolve,
        iterative: iterativeResolve,
        generatorFn: searchPairElements
        }
    return {
        error,
        resolve
    }
}

