import { useSelector, useDispatch } from 'react-redux';
import { add, remove, changeFilter } from '../redux/actions';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import 'react-native-get-random-values';
import { nanoid } from 'nanoid';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const LS_Key = 'contacts_hook';

export default function App() {
  const valueItems = useSelector(state => state.contacts.items);
  const valueFilter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem(LS_Key))
  //     ? JSON.parse(window.localStorage.getItem(LS_Key))
  //     : []
  // );
  // const [filter, setFilter] = useState('');

  let filtId = nanoid();

  // useEffect(() => {
  //   window.localStorage.setItem(LS_Key, JSON.stringify(contacts));
  // }, [contacts]);

  const handleFilterChange = event => {
    // setFilter(event.currentTarget.value);
    dispatch(changeFilter(event.currentTarget.value));
    // const value = event.currentTarget.value;
  };

  // const onFormSubmit = data => {
  //   const isRepead = contacts.some(contact =>
  //     contact.name.toLowerCase().includes(data.name.toLowerCase())
  //   );
  //   isRepead
  //     ? alert(`${data.name} is already in contacts`)
  //     : setContacts(prevState => [{ id: nanoid(), ...data }, ...prevState]);
  // };
  const onFormSubmit = data => {
    const isRepead = valueItems.some(contact =>
      contact.name.toLowerCase().includes(data.name.toLowerCase())
    );
    isRepead
      ? alert(`${data.name} is already in contacts`)
      : dispatch(add(data));
  };

  const getVisiableContacts = () => {
    const normalizedFilter = valueFilter.toLowerCase();
    return valueItems.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // const deleteCont = contId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contId)
  //   );
  // };
  const deleteCont = contId => {
    dispatch(remove(contId));
  };

  const visiableContacts = getVisiableContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onFormSubmit} />
      <h2>Contacts</h2>
      <Filter id={filtId} value={valueFilter} onChange={handleFilterChange} />
      <ContactList contactArray={visiableContacts} onDeleteCont={deleteCont} />
    </div>
  );
}
