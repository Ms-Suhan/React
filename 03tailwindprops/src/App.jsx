import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const myObj = {
    name : 'suhan',
    email: "ms@gmail.com",
    desc: "I am an fullstack webdeveloper"

  }
  const newArray =  [12, 34, 4]

  return (
    <div>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <div className="flex">

      <Card username="suhan" email="suhan@gmail.com" desc="I am an fullstack web developer" />
      <Card username="Ms" email="ms@gmail.com" desc = "I am an ai engineer"/>
      </div>
    </div>
  )
}

export default App
