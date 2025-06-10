import { useState } from 'react'


function App() {

  return (
    <>
      <div className= "w-full h-screen"
      style={{backgroundColor:"black"}}>
      <h1 className="text-white text-center pt-20 pb-10 text-3xl font-bold ">Passward Generator</h1>
      <div className="text-center rounded-full " style={{backgroundColor:"grey"}}>
        <input type="text" className="text-black my-4 text-3xl pb-2" value="Shivam "
        style={{backgroundColor:"white"}}/>
        <button className="text-3xl border-1 pb-2"
        style={{backgroundColor:"red"}}>Copy</button>
        <div className="flex justify-center gap-2" >
            <input type="range" className="text-yellow" /><h3> Length</h3>
            <input type="checkbox" value="Number" />
            <input type="checkbox" value="Character" />

        </div>

      </div>

      </div>
    </>
  )
}

export default App
