import { configureStore } from "@reduxjs/toolkit";

import { postsApi } from "./postsApi";
import { vocabularyApi } from "./vocabularyApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [vocabularyApi.reducerPath]: vocabularyApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(postsApi.middleware, vocabularyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>