import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
// let counter = 55

function addValue(){
  if(counter < 20){

    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) --> will only work once bcz all set counters are sent in a bundle as all of these are doing same job so only one is performed
    // setCounter(counter + 1)

    // Then how to repeat 

    setCounter((prevValue) => prevValue + 1 )
    setCounter((prevValue) => prevValue + 1 )
    setCounter((prevValue) => prevValue + 1 )
    
  }
  // console.log(`value added`)
}
function removeValue(){
  if(counter >0 ){

    setCounter(counter - 1)

  }
  // console.log(`Value removed`)
  // console.log(counter)
}
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
