import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import tailwindConfig from '../tailwind.config'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <h1 className=' text-center font-medium bg-orange-300  text-4xl'> Password Generator</h1>
 <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
    </>
  )
}

export default App
