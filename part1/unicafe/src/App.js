import { useState } from "react";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

function addGood() {
  setGood(currGood => currGood + 1)
}

  return (
    <div className="App">
    <h1>Give Feedback!</h1>
    <button  onClick={addGood}>Good</button>
    <button  onClick={() => {setNeutral(currNeu => currNeu + 1)}}>Neutral</button>
    <button  onClick={() => {setBad(currBad => currBad + 1)}}>Bad</button>
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
    </div>
  );
}

export default App;
