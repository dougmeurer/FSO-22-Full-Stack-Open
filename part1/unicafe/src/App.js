import { useState } from "react";
import Button from './components/Button'
import Statistics from "./components/Statistics";

function App() {

  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
    })

function handleGood () {
  setClicks({...clicks, good: clicks.good + 1, total: clicks.total + 1})
}

function handleNeutral () {
  setClicks({...clicks, neutral: clicks.neutral + 1, total: clicks.total + 1})
}

function handleBad () {
  setClicks({...clicks, bad: clicks.bad + 1, total: clicks.total + 1})
}


  return (
    <div className="App">
    <h1>Give Feedback!</h1>
    <Button onClick={handleGood} text="Good"></Button>
    <Button onClick={handleNeutral} text="Neutral"></Button>
    <Button onClick={handleBad} text="Bad"></Button>
    <h1>Statistics</h1>
    <Statistics good={clicks.good} bad={clicks.bad} neutral={clicks.neutral} total={clicks.total}/>
    </div>
  );
}

export default App;
