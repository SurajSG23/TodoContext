import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='w-full bg-red-700 text-center font-bold text-2xl text-white'>Hello</h1>
    </>
  )
}

export default App