import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY = 'petshop_cart';

const loadCart = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addItem: (state, action) => {
      const { product, qty = 1 } = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += qty;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          discont_price: product.discont_price,
          qty,
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    changeQty: (state, action) => {
      const { id, qty } = action.payload;
      const item = state.items.find((entry) => entry.id === id);
      if (!item) return;
      if (qty <= 0) {
        state.items = state.items.filter((entry) => entry.id !== id);
      } else {
        item.qty = qty;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, changeQty, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const persistCart = (store) => {
  store.subscribe(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().cart.items));
  });
};

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.qty, 0);
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (sum, item) => sum + (item.discont_price || item.price) * item.qty,
    0,
  );
