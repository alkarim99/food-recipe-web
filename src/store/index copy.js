import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import counterSlice from "./reducers/counterSlice"
import authSlice from "./reducers/authSlice"
import storage from "redux-persist/lib/storage"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

const persistConfig = {
  key: "root",
  storage,
}

const reducer = combineReducers({
  counterSlice,
  authSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  // reducer: {
  //   counterSlice,
  //   authSlice,
  // },
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)
