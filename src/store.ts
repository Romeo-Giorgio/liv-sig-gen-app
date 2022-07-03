//********** Imports **********//
import {
  Action,
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";

import racesSlice from "./slices/racesSlices";

//********** Store **********//
const reducer = combineReducers({
  races: racesSlice,
});

const store = configureStore({
  reducer,
});

export default store;

//********** Hooks **********//
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorBase;