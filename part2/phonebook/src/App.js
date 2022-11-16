import { useState } from "react";

function App() {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 


  function handleChange(e) {
    setPersons({...persons, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setPersons([...persons])
  }

  console.log(persons)

  return (
    <div className="App"> 
    <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={persons.name} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <p>{persons[0].name}</p>
     
    </div>
  );
}

export default App;
