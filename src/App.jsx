import { useState } from 'react'

import './App.css'

const App = () => {

  const [changeColor, setChangeColor] = useState("white")
  const [textColor, setTextColor] = useState("black")
  const [btnColor, setBtnColor] = useState("white")

  const redButton = () => {
    setChangeColor("red")
    setTextColor("white")
    setBtnColor("red")
  }
  
  const blueButton = () => {
    setChangeColor("blue")
    setTextColor("white")
    setBtnColor("blue")
  }
  const greenButton = () => {
    setChangeColor("green")
    setTextColor("white")
    setBtnColor("green")
  }
  const resetButton = () => {
    setChangeColor("white")
    setTextColor("black")
    setBtnColor("grey")
  }

  return (
    <div>
      <div style={{ color: textColor, backgroundColor: changeColor }} className="container">
        <h2 >Current Color is {changeColor}</h2>
        <div className="btns">
          <button style={{ backgroundColor: btnColor === "red" ? "red" : "white" }}  onClick={redButton}  >Red</button>
          <button style={{ backgroundColor: btnColor === "blue" ? "blue" : "white" }}  onClick={blueButton} >Blue</button>
          <button style={{ backgroundColor: btnColor === "green" ? "green" : "white" }}  onClick={greenButton} >Green</button>
          <button style={{ backgroundColor: btnColor === "grey" ? "grey" : "white" }}  onClick={resetButton} >Reset</button>
        </div>
      </div>

    </div>
  )
}

export default App
