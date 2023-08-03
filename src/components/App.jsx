import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import style from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleAddContact = ({ name, number }) => {
    const id = nanoid();

    const existingContact = contacts.find(
      contact => contact.name === name.toLowerCase()
    );

    if (existingContact) {
      alert(`Contact with the name "${name}" already exists.`);
      return;
    }

    setContacts([...contacts, { id, name, number }]);
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDelete = e => {
    const idBtn = e.currentTarget.id;

    const filteredArray = contacts.filter(item => item.id !== idBtn);

    setContacts(filteredArray);
  };

  useEffect(() => {
    const savedData = localStorage.getItem('contacts');
    if (savedData) {
      setContacts(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const lowerCaseFilter = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(lowerCaseFilter)
  );

  return (
    <div className={style.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
