import './Fibonacci.css'
import React, {useState} from 'react'

const Fibonacci = () => {
  const [index, setIndex] = useState<number>(0)
  const [sequence, setSequence] = useState<number[]>([])

  const resolve = () => {
    console.log('calculating')
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

        <button 
        type="button" 
        onClick={resolve}
        >
          Calculate
        </button>

      </div>
      <div className='OutputContainer'>
        <p>Output</p>
        { sequence.join(', ')}
      </div>
    </div>
  );
}

export default Fibonacci;
