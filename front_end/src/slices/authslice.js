import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

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
      Cookies.remove('accessToken');
    },
    setUsers(state, action){
      state.users = action.payload;
    },
    setUserStatus: (state, action) => {
      const updatedUser = action.payload;
      const index = state.users.findIndex(user => user.Email === updatedUser.Email);
      if (index !== -1) {
        state.users[index] = updatedUser;
      }
    }
  },
});

export const {setUsers, setUser, logout, setUserStatus } = authSlice.actions;
export default authSlice.reducer;

// ───────────────────────────────────────────────
// Manual async actions (dispatch from components)
// ───────────────────────────────────────────────
