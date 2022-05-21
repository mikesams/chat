import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  actions: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addActions(state, action) {
      state.actions = action.payload;
    },
    resetState(state, action) {
      state.actions = [];
    }
  },
})

export const { addActions, resetState } = userSlice.actions;

export default userSlice.reducer