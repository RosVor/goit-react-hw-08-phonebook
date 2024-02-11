import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const status = useSelector((state) => state.contacts.status);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchContacts());
    }
  }, [status, dispatch]);

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className='contact-list'>
      {contacts.map((contact) => (
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
