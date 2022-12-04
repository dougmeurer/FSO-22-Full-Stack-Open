import { useState } from "react";

function App() {

  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState({name: ""})

  function handleChange(e) {  
    setNewName({...newName, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setPersons(persons => [...persons, newName])  
  }

  return (
    <div className="App"> 
    <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input name="name" value={newName.name} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      {persons.map((cE, i) => {
        return cE.name[i].includes(cE.name[i]) ? null : <p>{cE.name}</p>
      })}
     
    </div>
  );
}

export default App;
