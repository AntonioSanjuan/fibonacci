import './Fibonacci.css'
import React, {useState} from 'react'

function Fibonacci() {
  const [index, setIndex] = useState(0)
  const resolve = () => {

  }

  return (
    <div className='App_MainContainer'>
      <div className='InputContainer'>
        <label>
          <input
            onChange={(e) => setIndex(e.event.value)}
          />
          Fibonacci index
        </label>
        <button onClick={resolve}></button>
      </div>
      <div className='OutputContainer'></div>
    </div>
  );
}

export default Fibonacci;
