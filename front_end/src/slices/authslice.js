import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    users: [],
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
    },
    setUsers(state, action){
      state.users = action.payload;
    },
  },
});

export const {setUsers, setUser, logout } = authSlice.actions;
export default authSlice.reducer;

