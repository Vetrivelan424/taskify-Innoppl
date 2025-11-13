import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi } from '../../api/mockAuth';
import { clearState } from '../../utils/localStorage';

export const loginThunk = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
  try {
    const res = await loginApi(payload);
    return res;
  } catch (err) {
    return rejectWithValue(err.message || 'Login failed');
  }
});

const initialState = {
  isAuthenticated: false,
  token: null,
  user: null, // { username, email }
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
      state.status = 'idle';
      state.error = null;
      clearState();
    },
    updateProfile: (state, action) => {
      const { username, email } = action.payload;
      if (!state.user) state.user = {};
      if (username != null) state.user.username = username;
      if (email != null) state.user.email = email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
      });
  },
});

export const { logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;