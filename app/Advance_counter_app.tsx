"use client"
import React from 'react'
import { useState } from 'react'

export const AdvanceCounterApp = () => {

    const [count , setCount] = useState(0)

    const decrement = (parameter = 1) => {
        setCount(count - parameter)
    }
    const increment = (parameter = 1) => {
        setCount(count + parameter)
    }

  return (
    <div className='flex flex-col items-center justify-center bg-yellow-400 p-4 rounded mt-3 mb-10'>
        <h1 className='font-bold text-4xl mb-3 mt-3'>Advance Counter App</h1>
        <div className='flex items-center justify-between gap-1'>
        <button className='bg-blue-400 hover:bg-blue-500 rounded p-2' onClick={()=>decrement(1)}>Decrement by 1</button>
        <button className='bg-blue-400 hover:bg-blue-500 rounded p-2' onClick={()=>decrement(2)}>Decrement by 2</button>
        <button className='bg-blue-400 hover:bg-blue-500 rounded p-2' onClick={()=>decrement(3)}>Decrement by 3</button>
        <span className='bg-black p-2 text-white m-3 rounded'>{count}</span>
        <button className='bg-blue-400 rounded p-2 hover:bg-blue-500' onClick={() => increment (1)}>Increment by 1</button>
        <button className='bg-blue-400 rounded p-2 hover:bg-blue-500' onClick={() => increment (2)}>Increment by 2</button>
        <button className='bg-blue-400 rounded p-2 hover:bg-blue-500' onClick={() => increment (3)}>Increment by 3</button>
        </div>
    </div>
  )
}
