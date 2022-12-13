import { useEffect, useState } from "react";
import api from "./api/api"
import { PersonsForm } from "./components/PersonsForm/PersonsForm";
import { Alert } from "./components/Alert/Alert"
import { Search } from "./components/Search/Search"
import { Filter } from "./components/Filter/Filter"


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
]) 

  const [newName, setNewName] = useState({name: "", number: ""})

  const [search, setSearch] = useState("")

  const [message, setMessage] = useState(null)


  useEffect(() => {
    api.getAll().then((initialLoad) => setPersons(initialLoad)
  )}, [])

  function exists (current){
  return current.name === newName.name
  }

  const handleFilter = (e) => {
    return setSearch(e.target.value)
  }

  function findId(name) {
    const user = persons.filter((current) => current.name === name)
    return user
  }

  function toUpdate(newObj) {
      const updatedArr = persons.map((curr) => {
        return curr.name === newObj.name ? { name: newObj.name, number: newObj.number, id: newObj.id} : { name: curr.name, number: curr.number, id: curr.id}

      })
      setPersons(updatedArr)
      setMessage(`${newObj.name} was successfully updated`)
      setTimeout(()=> {
        setMessage(null)
      }, 2000)
  }

  function handleSubmit(e) {
		e.preventDefault();

		if (persons.find(exists)) {
			if (window.alert(`${newName.name} is already added to phonebook, replace the old number with a new one ?`));
			{
				const user = findId(newName.name);
				const id = user[0].id;
				const newObj = user[0];
				newObj.number = newName.number;

				return api.update(id, newObj)
					.then(toUpdate(newObj))
					.catch((err) => {
						console.log(err)
					})
			} 
		}

		setPersons([...persons, newName]);

		api.create(newName);
	}

  function handleChange(e) {  
    setNewName({...newName, [e.target.name]: e.target.value})
  }

  function deleteName(id) {
		if (window.alert(`Do you want to delete? ${newName.name}`));
		{
			api
				.remove(id)
				.catch((err) => {
					console.log(err)
					setMessage(`[ERROR] ${newName.name} was already deleted from server`)
					  setTimeout(() => {
						setMessage(null)
					  }, 5000)
				})
				.then(setPersons(persons.filter((person) => person.id !== id)));
		}
	}

   return (
    <div className="App"> 
          <div className="d-flex align-items-center flex-column space-between mt-2">
            <Search handleFilter={handleFilter} />
            <Alert message={message}/>
            <h2 className="mt-4 mb-3">add</h2>
            <PersonsForm handleSubmit={handleSubmit} handleChange={handleChange} />
            <h2 className="mt-4 mb-3">Contacts</h2>
            <Filter persons={persons} searchbar={search} deleteName={deleteName} />
          </div>
    </div>
  );
}

export default App;
