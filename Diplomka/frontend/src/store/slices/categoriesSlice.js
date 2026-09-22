import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllCategories } from '../../api/categories';

export const fetchCategories = createAsyncThunk(
  'categories/fetchAll',
  async () => getAllCategories(),
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default categoriesSlice.reducer;
