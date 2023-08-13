import { configureStore, combineReducers } from "@reduxjs/toolkit"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import counterSlice from "./reducers/counterSlice"
import authSlice from "./reducers/authSlice"
import thunk from "redux-thunk"

const persistConfig = {
  key: "root",
  storage,
  version: 1,
}

const reducers = combineReducers({
  counterSlice,
  authSlice,
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
