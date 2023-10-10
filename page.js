'use client'
import React, { useState } from 'react'

const page = () => {
  const[task,settask]=useState('')
  const[dis,setdis]=useState('')
  const[main,setmain]=useState([])

  const sub=(e)=>{
    e.preventDefault()
    setmain([...main,{task,dis}])
    settask('')
    setdis('')
  }
  const dil=(i)=>{
      let copytask=[...main]
      copytask.splice(i),1
      setmain(copytask)
  }
  let render=<ul>No Task Available</ul>
  if(main.length>0){
  render=main.map((t,i)=>{
    return <div className='m-2 flex justify-between' key={i} >
    <h1>Task {i+1}</h1>
    <div>
    <h4 className='font-bold text-black'>{t.task}</h4>
    <p>{t.dis}</p>
    </div>
    <button onClick={()=>{
      dil(i)
    }}
     className='bg-gray-500 px-5 py-2 text-white '>Delete</button>
    </div>
    
  })
}
  return (
    <>
      <h1 className='bg-gray-800 text-white text-center font-bold p-5 text-5xl'>SAI"S TODOLIST</h1>
      <form onSubmit={sub}>
        <input 
        type='text' 
        className='px-5 py-2 border-gray-600 border-4 m-5'
          placeholder='Enter Task Here'
          value={task}
          onChange={(e)=>{
            settask(e.target.value)
          }}
        />
        <input 
        type='text' 
        className=' px-5 py-2 border-gray-600 border-4 m-5'
          placeholder='Enter Discription Here'
          value={dis}
          onChange={(e)=>{
            setdis(e.target.value)
          }}
        />
        <button className='bg-gray-700 text-white w-40 h-8 text-center  font-bold rounded m-10'>Add Task</button>
      </form>
      <hr/>
      <div className='p-5 bg-slate-600 text-white '>
         <ul >{render}</ul>
      </div>
    </>
  )
}

export default page
