import { useState } from 'react'
import './App.css'
import ShoppingCart from './component/ShoppingCart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome</h1>
     <ShoppingCart />
       
    </>
  )
}

export default App
