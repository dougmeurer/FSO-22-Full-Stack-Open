import { useState } from "react";
import Button from './components/Button'

function App() {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
    })

  const [allClicks, setAllClicks] = useState([])

function handleGood () {
  setClicks({...clicks, good: clicks.good + 1})
  setAllClicks(allClicks.concat(1))
}

function handleNeutral () {
  setClicks({...clicks, neutral: clicks.neutral + 1})
  setAllClicks(allClicks.concat(0))
}

function handleBad () {
  setClicks({...clicks, bad: clicks.bad + 1})
  setAllClicks(allClicks.concat(-1))
}

let newGood = []
let newNeutral = []
let newBad = []

  allClicks.forEach(number => {
 
    if (number === 1) {
      return newGood.push(number)
      
    } 

    if (number === 0) {
      return newNeutral.push(number)
      
    } 

    if (number === -1) {  
      return newBad.push(number)

    }
  })

  console.log("newgood", typeof newGood)
  console.log("newneutral",newNeutral.length)
  console.log("newbad",newBad.length)
  console.log("avg", newGood.length + newBad.lenght)


console.log(clicks)
console.log(allClicks)

  return (
    <div className="App">
    <h1>Give Feedback!</h1>
    <Button onClick={handleGood} text="Good"></Button>
    <Button onClick={handleNeutral} text="Neutral"></Button>
    <Button onClick={handleBad} text="Bad"></Button>
    <div>
      <h2>Statistics</h2>
      <p>Good: {clicks.good}</p>
      <p>Neutral: {clicks.neutral}</p>
      <p>Bad: {clicks.bad}</p>
      <p>All: {allClicks.length}</p>
      <p>Average: {}</p>
    </div>
    </div>
  );
}

export default App;
