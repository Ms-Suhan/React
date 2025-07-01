import React from 'react'

function Card(props){
    console.log(props)
    // console.log(user)
    
    return(
        <>
        
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black ml-2">
        <img
          src="https://images.unsplash.com/photo-1750174026254-468485d4a8bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
           {props.username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{props.email}</h2>
        </div>
        <p className="text-gray-300">
          {props.desc}
        </p>
      </div>
        </>
    )
}

export default Card