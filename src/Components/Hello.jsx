import React from 'react'

function Hello({count,increment, decrement}) {
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Hello