import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const add = createAction('items/add');
export const remove = createAction('items/remove');
export const changeFilter = createAction('filter/changeFilter');

const items = createReducer([], {
  [add]: (state, action) => [{ id: nanoid(), ...action.payload }, ...state],

  [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const contactsReducer = {
  items,
  filter,
};

console.log(contactsReducer);

export const store = configureStore({
  reducer: { items: items, filter: filter },
});
