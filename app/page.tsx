import React from 'react'
import Str_Prac from './Str_Prac';
import { CounterApp } from './Counter_app';
import { AdvanceCounterApp } from './Advance_counter_app';
import Todo from './Todo';

const Page = () => {
  return (
    <div>
      
      <Todo/>
      
      <Str_Prac/>
      
      <CounterApp/>

      <AdvanceCounterApp/>

      
    </div>
  )
}

export default Page;