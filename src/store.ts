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

import raceSlice from "./slices/raceSlice";
import racePointSlice from "./slices/racePointSlice";
import signalerSlice from "./slices/signalerSlice";
import evenementSlice from "./slices/evenementSlice";

//********** Store **********//
const reducer = combineReducers({
  races: raceSlice,
  racePoints: racePointSlice,
  signalers: signalerSlice,
  evenement: evenementSlice,
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
