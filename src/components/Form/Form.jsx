import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getPhoneBookValue } from '../../redux/phoneBookSlice';
import { FormStyle } from './Form.styled';
import { InputStyle, LabelStyle, ButtonStyle } from 'components/App.styled';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const phoneBook = useSelector(getPhoneBookValue);

  const onSubmitAddContact = event => {
    event.preventDefault();
    const data = { name, number };
    const newObj = { ...data, id: nanoid() };

    if (isNameNew(phoneBook, newObj) !== undefined) {
      Notify.warning(`${newObj.name} is already in contacts`, {
        width: '400px',
        position: 'center-center',
        timeout: 3000,
        fontSize: '20px',
      });
      return;
    }

    dispatch(addContact(newObj));

    reset();
  };

  const isNameNew = (phoneBook, newObj) => {
    return phoneBook.find(
      ({ name }) => name.toLowerCase() === newObj.name.toLowerCase()
    );
  };

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyle onSubmit={onSubmitAddContact}>
      <LabelStyle>
        Name:
        <InputStyle
          type="text"
          name="name"
          value={name}
          required
          onChange={onChangeInput}
        />
      </LabelStyle>
      <LabelStyle>
        Phone number:
        <InputStyle
          type="tel"
          name="number"
          value={number}
          required
          onChange={onChangeInput}
        />
      </LabelStyle>
      <ButtonStyle type="submit">Add contact</ButtonStyle>
    </FormStyle>
  );
};
