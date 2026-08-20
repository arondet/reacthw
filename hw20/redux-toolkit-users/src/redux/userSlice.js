import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Андрей Романько', email: 'andrew@example.com' },
    { id: 2, name: 'Мария Смирнова', email: 'maria@example.com' },
    { id: 3, name: 'Алексей Кузнецов', email: 'alex@example.com' },
    { id: 4, name: 'Дарья Иванова', email: 'daria@example.com' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default userSlice.reducer;