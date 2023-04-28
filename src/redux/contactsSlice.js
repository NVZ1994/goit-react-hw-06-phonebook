import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialContacts = {
  contacts: [
    { name: 'Rosie Simpson', number: '459-12-56' },
    { name: 'Hermione Kline', number: '443-89-12' },
    { name: 'Eden Clements', number: '645-17-79' },
    { name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contacts = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(
          contact => contact.name !== action.payload
        ),
      };
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, contacts.reducer);

export const { addContact, deleteContact } = contacts.actions;
