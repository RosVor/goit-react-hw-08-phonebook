import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from '../ContactList/ContactList'; 
import ContactForm from '../ContactForm/ContactForm'; 
import { fetchContacts } from '../redux/contactsSlice'; 
import { selectLoading } from '../redux/selectors'; 

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <ContactForm /> 
      <div>{isLoading && 'Loading...'}</div>
      <ContactList /> 
    </>
  );
};

export default Contacts;
