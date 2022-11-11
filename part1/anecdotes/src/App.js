import { useState } from "react";


function App() {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0))

  function randNum () {
    let result = Math.floor(Math.random() * anecdotes.length)
    return result
  }
   
  const clicked = () => {
    setSelected(randNum)
  }

  const handleVote = () => {
		const allVotes = [...vote];
		allVotes[selected] += 1;
		setVote(allVotes);
	};

  function mostVotes (Vote) {
    let high = 0
    let index = 0

    for (let i = 0; i < 6; i++){
      if (vote[i] > high) {
        high = vote[i]
        index = i
      }
    }
    return index
  }

  return (
    <div className="App"> 
    <h1>Anecdote of the day </h1>
    <p>{anecdotes[selected]}</p>
    {vote[selected] === 0 ? null : <p>has {vote[selected]} votes</p>}
    <button onClick={handleVote}>Vote</button>
    <button onClick={clicked}>Next Anecdotes</button>
    <h2>Anecdote with most votes</h2>
    <p>{anecdotes[mostVotes(vote)]}</p>
    <span>{vote[mostVotes(vote)]}</span>

    
    </div>
  );
}

export default App;
