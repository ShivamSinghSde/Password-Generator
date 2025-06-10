import { useState } from 'react'


function App() {

  return (
    <>
      <div className= "w-full h-screen"
      style={{backgroundColor:"black"}}>
      <h1 className="text-white text-center pt-20 pb-10 text-3xl font-bold ">Passward Generator</h1>
      <div className="text-center rounded-full " style={{backgroundColor:"grey"}}>
        <input type="text" className="text-red-500 my-4 text-3xl pb-2 px-2" value="Shivam "
        style={{backgroundColor:"white"}}/>
        <button className="text-3xl text-red-700 cursor-pointer border-1 pb-2 px-3"
        style={{backgroundColor:"blue"}}>Copy</button>
        <div className="flex justify-center gap-2 pb-2 text-red" >
            <input type="range"
            min ={8} max={50} value={length} className="cursor-pointer" /><label className="text-red-700 font-bold"> Length : {length}</label>
            <input type="checkbox" className="cursor-pointer" /><label className="text-red-700  font-bold" > Number</label>
            <input type="checkbox" className="cursor-pointer" /><label className="text-red-700 font-bold"> Character</label>

        </div>

      </div>

      </div>
    </>
  )
}

export default App
