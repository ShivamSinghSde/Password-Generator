import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
    const [length, setLength] = useState(8)
    const[number, setNumber] = useState(false)
    const [character, setCharacter] = useState(false)
    const [passward, setPassward]  = useState("")
    const passRef = useRef(null)
    const passwardGenerator = useCallback(
    ()=>{
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(number) str += "0123456789"
        if(character) str += "~!@#$%^&*()_+}{}?<>-/"

        for(let i=0; i<length; ++i){
            let char = Math.floor(Math.random()*str.length + 1 )
            pass += str.charAt(char)
        }
        setPassward(pass)
    }, [length,number,character,setPassward])
    useEffect(()=>{passwardGenerator()},[length, number,character, setPassward])
    const copyPasswardClipboard = useCallback(()=> {
        passRef.current?.select()
        window.navigator.clipboard.writeText(passward)
    }, [passward])


  return (
    <>
      <div className= "w-full h-screen"
      style={{backgroundColor:"black"}}>
      <h1 className="text-white text-center pt-20 pb-10 text-3xl font-bold ">Passward Generator</h1>
      <div className="fixed flex flex-wrap justify-center inset-x-0 align-center">
      <div className="text-center rounded-full px-15" style={{backgroundColor:"grey"}}>
        <input type="text" readOnly ref={passRef} className="text-red-500  text-3xl my-4 p-2 rounded-sm" value={passward}
        style={{backgroundColor:"white"}}/>
        <button
        onClick = {copyPasswardClipboard}
        className="text-3xl text-white cursor-pointer p-2 px-3 text-center rounded-sm"
        style={{backgroundColor:"blue"}}>Copy</button>
        <div className="flex justify-center gap-2 pb-2 text-red" >
            <input type="range"
            min ={8} max={20} value={length} className="cursor-pointer"
             onChange={(e)=> setLength(e.target.value)}
             /><label className="text-red-700 font-bold"> Length : {length}</label>
            <input type="checkbox" className="cursor-pointer"
             onChange={()=>{setNumber((prev) => !prev)}}
             /><label className="text-red-700 font-bold"> Number</label>
            <input type="checkbox" className="cursor-pointer"
            onChange={()=>{setCharacter((prev)=>!prev)}}
            /><label className="text-red-700 font-bold"> Character</label>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
