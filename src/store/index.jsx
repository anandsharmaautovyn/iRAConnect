import { configureStore } from "@reduxjs/toolkit";
import login from '../reducers/login'

export default Stores = configureStore({
  reducer: {
    login: login,
  },
});