import React, { useEffect, useState } from "react"

const useFibonacciResolver = () => {
    const resolveByIndex = (fibonacciIndex: number): number[] => {
        return [0, 1]
    }

    return {
        resolveByIndex
    }
}

export default useFibonacciResolver