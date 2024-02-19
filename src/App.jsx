import { useState } from "react";


function App() {
let  [count,setCount] = useState(0);


  const changeCounter = ()=>{
    setCount(count+1)
    console.log(count)


  }
  return (
    <>
      <button onClick={changeCounter}>Abdullah Owais {count} </button>
    </>
  )
}

export default App
