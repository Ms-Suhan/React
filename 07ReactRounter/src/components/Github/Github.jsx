import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData();
  // console.log(data)
  // let [data, setData] = useState([])
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/Hiteshchoudhary')
  //   .then((res) => res.json())
  //   .then(data => {
  //     // console.log(data)
  //     setData(data)
  //   })
  //   // console.log(data)
  // },[])
  return (
    <div className="flex w-full bg-gray-500 justify-center align-middle h-fit">
      <img src={data.avatar_url} alt="" className='rounded-full w-2xs ' />
      <div className='bg-gray-500 rounded p-5 align-middle'>Github followers: {data.followers}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Hiteshchoudhary')
  // console.log(response.json())
  return response.json();
  
}