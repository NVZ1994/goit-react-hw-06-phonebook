import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './FilterInput/Filter';
import { Form } from './Form/Form';
import './App.css';

function App() {
  return (
    <div className="Container">
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
