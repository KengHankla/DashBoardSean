import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import reducer from "redux/root-reducer";

const middleware = [thunk];

export const store = configureStore({
  reducer,
  middleware,
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export const appSelector = (store: RootState) => store;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
