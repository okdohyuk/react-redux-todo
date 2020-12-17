import { configureStore, createSlice } from '@reduxjs/toolkit';

/* const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
}); */

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
