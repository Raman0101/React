import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  const addValue = () => {
    
    setCounter(counter + 1)
    console.log("value added!", counter);
  }

  const removeValue = () => {
    if(counter >0){
      setCounter(counter - 1)
    }
    console.log("value removed!!", counter)
  }

  return (
    <>
      <h1>useState Hook</h1>
      <h2>couter value: {counter} </h2>

      <button
      onClick = {addValue}
      >add value {counter}</button>

      <br />
      <button
      onClick= {removeValue}>remove value {counter} </button>
    </>
  )
}

export default App
