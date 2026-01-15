import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: '',
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
      state.errorMessage = '';
    },
    loginFulfilled: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.token = payload?.token;
      state.errorMessage = '';
    },
    loginRejected: (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.errorMessage = JSON.parse(payload);
    },
    logoutfulfilled: (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.token = '';
      state.selectedApp= null;
      state.errorMessage = '';
    }
  }
})

export const { loginPending, loginFulfilled, loginRejected, logoutfulfilled } = loginSlice.actions;
export default loginSlice.reducer;