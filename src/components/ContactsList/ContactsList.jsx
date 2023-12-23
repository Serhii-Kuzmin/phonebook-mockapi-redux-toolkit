import { ContactListStyle, ContactItemStyle } from './ContactsList.styled';
import { ButtonStyle } from 'components/App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
import { getPhoneBookValue } from '../../redux/phoneBookSlice';
import { useEffect } from 'react';
import { delContactThunk, getContactsThunk } from 'services/fetchContacts';

export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContactThunk(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyle type="button" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactListStyle>
  );
};
