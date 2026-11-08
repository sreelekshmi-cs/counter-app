
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Count Zone</h1>

      <div className="counter">
        {count}
      </div>

      <div className="buttons">
        <button className="minus"
          onClick={() => setCount(count - 1)}
          disabled={count === 0}>
          −
        </button>

        <button className="reset"
          onClick={() => setCount(0)}>
          Reset
        </button>

        <button className="plus"
          onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>

      {count === 0 && (
        <p>Minimum limit reached</p>
      )}

    </div>
  )
}

export default App