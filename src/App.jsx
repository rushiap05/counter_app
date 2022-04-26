import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  // const [newNum, setNewNum] = useState(0);
  // const [sendNum , setSendNum] = useState(1);

  // const takeInput = (event) => {
  //   console.log(event.target.value)
  //   if(newNum < 1000){
  //   setNewNum(event.target.value)
  //   }
  //   else {
  //     alert("Not bigger than 1000")
  //   }
  // }

  // useEffect(()=> {

  // },[sendNum])


  return (
    <div className="App">
        {/* <div>
          <input onChange={takeInput} type="number" />
          <button onClick={() => {
            console.log("clicked input")
            setSendNum(newNum)
          }}>Take Input</button>
        </div> */}
        <Counter />
    </div>
  )
}

export default App
