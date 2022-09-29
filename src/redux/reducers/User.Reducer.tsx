import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    name: 'Neto',
    email: 'neto@gmail.com'
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },

    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const {setEmail, setName} = slice.actions;
export default slice.reducer;