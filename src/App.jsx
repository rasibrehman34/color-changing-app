import { useState } from 'react'

import './App.css'

const App = () => {

  const [changeColor, setChangeColor] = useState("white")
  const [textColor, setTextColor] = useState("black")

const redButton = ()=>{
  setChangeColor("red")
  setTextColor("white")
}

const blueButton = ()=>{
  setChangeColor("blue")
  setTextColor("white")
}
const greenButton = ()=>{
  setChangeColor("green")
  setTextColor("white")
}
const resetButton = ()=>{
  setChangeColor("white")
  setTextColor()
}
    
  return (
    <div>
      <div style={{ color: textColor, backgroundColor: changeColor}} className="container">
        <h2 >Current Color is {changeColor}</h2>
        <div className="btns">
          <button  onClick={redButton}  >Red</button>
          <button  onClick={blueButton} >Blue</button>
          <button  onClick={greenButton} >Green</button>
          <button  onClick={resetButton} >Reset</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
