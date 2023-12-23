import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  delContactThunk,
  getContactsThunk,
  postContactThunk,
} from 'services/fetchContacts';

const contactInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [getContactsThunk, postContactThunk, delContactThunk];

const addStatusActs = status => arrOfActs.map(el => el[status]);

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: contactInitialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = null;
      })
      .addCase(postContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, payload];
        state.error = null;
      })
      .addCase(delContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.error = null;
      })
      .addMatcher(isAnyOf(...addStatusActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusActs('rejected')), onRejected);
  },
});

export const getPhoneBookValue = state => state.phonebook.contacts;
export const getIsLoading = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;

// const phoneBookSlice = createSlice({
//   name: 'phoneBook',
//   initialState: contactInitialState,
//   reducers: {
//     addContact(state, action) {
//       state.contacts = [...state.contacts, action.payload];
//     },
//     delContact(state, action) {
//       state.contacts = state.contacts.filter(
//         contact => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const getPhoneBookValue = state => state.phoneBook.contacts;

// export const { addContact, delContact } = phoneBookSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsPersistReducer = persistReducer(
//   persistConfig,
//   phoneBookSlice.reducer
// );
