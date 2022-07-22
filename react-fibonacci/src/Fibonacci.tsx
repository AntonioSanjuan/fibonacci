import './Fibonacci.css'
import React, {useState} from 'react'
import {useFibonacciResolver} from './hooks/fibonacciResolver/useFibonacciResolver'

const Fibonacci = () => {
  const {resolve} = useFibonacciResolver()

  const [index, setIndex] = useState<number>(0)
  const [isRecursive, setIsRecursive] = useState<boolean>(false)
  const [outputSequence, setOutputSequence] = 
    useState<number[]|undefined>()

  const getNewSequence = () => {
    setOutputSequence(
      resolve(index, isRecursive)
    )
  }

  return (
    <div className='MainContainer'>
      <div className='InputContainer'>
        <label>
          Fibonacci index
          <input
            type='number'
            id='fibonacciInput_index'
            value={index}
            min='0'
            onChange={(e) => setIndex(e.target.valueAsNumber)}
          />
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={isRecursive}
            onChange={() => setIsRecursive(!isRecursive)}/> 
          Recursive execution
        </label>
      </div>
      <div className='ActionContainer'>       
         <button 
            type="button"
            onClick={getNewSequence}
            >
              Calculate
          </button>
        </div>
      <div className='OutputContainer'>
        <p>Output</p>
        { outputSequence && outputSequence.join(', ')}
      </div>
    </div>
  );
}

export default Fibonacci;
