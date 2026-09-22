import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getProductById } from '../../api/products';
import { getCategoryWithProducts } from '../../api/categories';

export const fetchAllProducts = createAsyncThunk(
  'products/fetchAll',
  async () => getAllProducts(),
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (categoryId) => getCategoryWithProducts(categoryId),
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id) => getProductById(id),
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    all: { items: [], status: 'idle', error: null },
    byCategory: { category: null, items: [], status: 'idle', error: null },
    current: { item: null, status: 'idle', error: null },
  },
  reducers: {
    clearCurrentProduct: (state) => {
      state.current = { item: null, status: 'idle', error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.all.status = 'loading';
        state.all.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.all.status = 'succeeded';
        state.all.items = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.all.status = 'failed';
        state.all.error = action.error.message;
      })

      .addCase(fetchProductsByCategory.pending, (state) => {
        state.byCategory.status = 'loading';
        state.byCategory.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.byCategory.status = 'succeeded';
        state.byCategory.category = action.payload.category;
        state.byCategory.items = action.payload.products;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.byCategory.status = 'failed';
        state.byCategory.error = action.error.message;
      })

      .addCase(fetchProductById.pending, (state) => {
        state.current.status = 'loading';
        state.current.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.current.status = 'succeeded';
        state.current.item = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.current.status = 'failed';
        state.current.error = action.error.message;
      });
  },
});

export const { clearCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
