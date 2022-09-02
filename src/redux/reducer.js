import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { add, remove, changeFilter } from './actions';

const items = createReducer([], {
  [add]: (state, action) => [{ id: nanoid(), ...action.payload }, ...state],

  [remove]: (state, action) => state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
