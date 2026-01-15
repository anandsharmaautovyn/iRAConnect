import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginFulfilled, loginPending, loginRejected, logoutfulfilled } from '../reducers/login';

export const getLogin = createAsyncThunk(
    'login/getLogin',
    async (payload, { rejectWithValue, dispatch }) => {
        try {
            dispatch(loginPending());
            dispatch(loginFulfilled(finalData));
        } catch (error) {
            dispatch(loginRejected(JSON.stringify(error?.response)));
            return rejectWithValue(JSON.stringify(error?.response));
        }
    }
);
