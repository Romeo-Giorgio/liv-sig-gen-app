//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  Update,
} from "@reduxjs/toolkit";
import { Signaler } from "../services/types";
import SignalersDataService from "../services/signalers.service";

//********** Thunks **********//
export const getSignalersList = createAsyncThunk(
  "signalers/getSignalersList",
  async (_, thunkAPI) => {
    const response = await SignalersDataService.getAll();
    return response.data;
  }
);
export const updateSignaler = createAsyncThunk(
  "signalers/updateSignaler",
  async (signalerToUpdate: Signaler, thunkAPI) => {
    const response = await SignalersDataService.updateSignaler(
      signalerToUpdate
    );
    return response.data;
  }
);

//********** Slice **********//
export const signalerAdapter = createEntityAdapter<Signaler>();

export const signalerSlice = createSlice({
  name: "signalers",
  initialState: signalerAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSignalersList.fulfilled, (state, action) => {
      signalerAdapter.setAll(state, action.payload);
    });
    builder.addCase(updateSignaler.fulfilled, (state, action) => {
      const signalerToUpdate: Update<Signaler> = {
        id: action.payload.updatedSignaler.id,
        changes: {
          ...action.payload.updatedSignaler,
        },
      };
      signalerAdapter.updateOne(state, signalerToUpdate);
    });
  },
});

//********** Actions **********//
export const {} = signalerSlice.actions;

export default signalerSlice.reducer;
