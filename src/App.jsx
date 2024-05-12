import { useState, useEffect } from 'react'
import './App.css'
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import jsonData from './contacts.json'


function App() {

  const [contacts, setContacts] = useState(() =>
  {
    const basicContacts = localStorage.getItem('basicData');
    if (basicContacts !== null) {
      return JSON.parse(basicContacts)
    } else {return jsonData}
  });

  const [inputValue, setInputValue] = useState("");
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const getNewContact = (contact) => {
    setContacts((prevContacts) => {
     return [...prevContacts, contact]
   })
  }
  
  const deleteContact = (id) => {
    setContacts((prevContacts) => {
       return prevContacts.filter(contact => contact.id !== id)
     })
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );
  
  useEffect(() => { localStorage.setItem('basicData', JSON.stringify(contacts)) }, [contacts]);


  return (
    <div>
  <h1>Phonebook</h1>
      <ContactForm getNewContact={getNewContact} />
  <SearchBox value={inputValue} onChange={handleChange} />
      <ContactList data={filteredContacts} onClick={deleteContact} />
</div>

  )
}

export default App;
