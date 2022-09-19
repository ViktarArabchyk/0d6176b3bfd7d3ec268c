import { configureStore } from '@reduxjs/toolkit';
import { asteroidsApi } from './slices/asteroidsApi';

export const store = configureStore({
  reducer: {
    [asteroidsApi.reducerPath]: asteroidsApi.reducer,
  }
});

