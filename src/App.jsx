import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1 className='text-3xl font-bold underline'>Anon Poksombutkul</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Peng is {count}
        </button>
        
      </div>
      
    </>
  )
}

export default App
