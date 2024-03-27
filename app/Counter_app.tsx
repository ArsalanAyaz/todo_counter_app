"use client"
import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {

    const [count , setCount] = useState(0)

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

  return (
    <div className='flex flex-col items-center justify-center bg-gray-400 p-4 rounded-full'>
        <h1 className='font-bold text-4xl mb-3 mt-3'>Counter App</h1>
        <div className='flex items-center justify-between'>
        <button className='bg-blue-400 hover:bg-blue-500 rounded p-2' onClick={decrement}>Decrement</button>
        <span className='bg-black p-2 text-white m-3 rounded'>{count}</span>
        <button className='bg-blue-400 rounded p-2 hover:bg-blue-500' onClick={increment}>Increment</button>
        </div>
    </div>
  )
}
