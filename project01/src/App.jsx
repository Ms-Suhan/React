import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

  document.querySelector('body').style.backgroundColor = color
  const changeColor = function(e){
    // console.log(e.target.innerHTML.toLowerCase())
    setColor(e.target.innerHTML.toLowerCase())
  }

  return (
    <div className=' bg-blue-500 p-5 flex justify-center rounded-full gap-3 flex-wrap fixed bottom-12 insert-x-0'>
      <button onClick={() => {setColor("green")}} style={{backgroundColor: 'green',borderRadius: '20px'}} >Green</button>
      <button onClick={changeColor}  style={{backgroundColor: 'blue',borderRadius: '20px'}}>Blue</button>
      <button onClick={changeColor}  style={{backgroundColor: 'black',borderRadius: '20px'}}>Black</button>
      <button onClick={changeColor}  style={{backgroundColor: 'olive',borderRadius: '20px'}}>Olive</button>
      <button onClick={changeColor}  style={{backgroundColor: 'yellow',color: 'black',borderRadius: '20px'}}>Yellow</button>
      <button onClick={changeColor}  style={{backgroundColor: 'grey', borderRadius: '20px'}}>grey</button>
  
    </div>
      
  )
}

export default App
