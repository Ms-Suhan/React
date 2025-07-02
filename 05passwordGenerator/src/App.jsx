import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const passRef = useRef(null)

  const copyPassword = useCallback(()=> {
    passRef.current?.select();
    passRef.current.setSelectionRange(0,100)
    window.navigator.clipboard.writeText(password)
  },[password])

  const generatePassword = useEffect(()=> {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let num = '123457890'
    let char = '!@#$%^&*()'
    let pass = ''
    if(numbersAllowed) str += num;
    if(charAllowed) str += char;

    for(let i = 1; i <= length; i++){
      let rand = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(rand)
    }
    setPassword(pass)
  }, [length,numbersAllowed,charAllowed])

  useCallback(() => {
    generatePassword()
  },[length,numbersAllowed,charAllowed])

  return (
    <>
      <div className="w-full bg-gray-500 p-5 rounded-xl">

      <h1 className='text-orange-500'>Password Generator</h1>
      <div className='flex w-full my-4 '>
        <input 
        type="text"
        className='w-full bg-white rounded text-gray-500 p-4'
        placeholder='Password'
        value={password}
        readOnly
        ref={passRef}
        
        />
        <button 
        className='hover:bg-gray-200 ' 
        onClick={copyPassword}
        >Copy</button>
      </div>
      <div className="flex gap-3">
        <input 
        type="range" 
        id='range'
        min={8}
        max={100}
        onChange={(e) => setLength(e.target.value)}
        

        />
        <label htmlFor="range">Length: {length}</label>
        <input 
        type="checkbox" 
        id='numberAllowed'
        onClick={() => setNumbersAllowed(prev => !prev)}
        />
        <label htmlFor="numberAllowed">Numbers: </label>
        <input 
        type="checkbox" 
        id='charsAllowed'
        onClick={() => setCharAllowed(prev => !prev)}
        />
        <label htmlFor="charsAllowed">Characters: </label>
      </div>
      </div>
    </>
  )
}

export default App
