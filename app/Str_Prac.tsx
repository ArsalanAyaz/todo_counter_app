'use client'

import { useState } from "react";

export default function Str_Prac() {
  
  // let val = "helllo"

  const [val1, setVal1] = useState("")
  const [val2, setVal2] = useState("")

  const onChangeHandler1 = (e:any) => {

    console.log("e is :" , e.target.value)
    setVal1(e.target.value)
    
  }
  const onChangeHandler2 = (e:any) => {

    console.log("e is :" , e.target.value)
    setVal2(e.target.value)
    
  }

  return (
   <div className="flex flex-col items-center justify-center bg-blue-500 mt-5 mb-3 rounded-full">
    
    <h1 className="text-4xl font-bold mt-5">useState and string practice</h1>
    <div className="flex items-center justify-center p-4 gap-10">
    <div className="flex flex-col mt-4 ">
    <input placeholder="input 1" className="border border-blue-400" type="text"  onChange={onChangeHandler1} />
    input_1 : {val1}
    <br />
    length of input_1 : {val1.length}
    <br />
    </div>

    <div className="flex flex-col mt-4 ">
    <input placeholder="input 2" className="border border-blue-400" type="text"  onChange={onChangeHandler2} />
    input_2 : {val2}
    <br />
    length of input_2 : {val2.length}
   </div>
   </div>
   </div>
   
  );
}
