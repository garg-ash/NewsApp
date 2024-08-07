import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <News/>
      </div>
    </>
  )
}

export default App
