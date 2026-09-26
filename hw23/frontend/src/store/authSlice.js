import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/auth';

const authRequest = async (endpoint, credentials, rejectWithValue) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      return rejectWithValue(data.msg || 'Server error');
    }

    localStorage.setItem('token', data.token);
    return data.token;
  } catch {
    return rejectWithValue('Не удалось подключиться к серверу');
  }
};

export const login = createAsyncThunk('auth/login', (credentials, { rejectWithValue }) =>
  authRequest('login', credentials, rejectWithValue)
);

export const register = createAsyncThunk('auth/register', (credentials, { rejectWithValue }) =>
  authRequest('register', credentials, rejectWithValue)
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      localStorage.removeItem('token');
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    [login, register].forEach((thunk) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          state.token = action.payload;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
