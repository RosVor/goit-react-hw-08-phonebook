import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { getContacts, getFilter } from '../redux/selectors';
import "./ContactList.css"
const ContactList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contact.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };


  return (
    <ul className='contact-list'>
      {filteredContacts.map((contact) => (
        <li className='contact-item' key={contact.id}>
          {contact.name}: {contact.number}
          <button className="button-delete" type="button" onClick={() => handleDeleteContact(contact.id)}>
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
