import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import dataReducer from "./slices/dataSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    data: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
