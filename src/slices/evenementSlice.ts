//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createAction,
  Update,
} from "@reduxjs/toolkit";
import EvenementDataService from "../services/evenement.service";
import { Evenement } from "../services/types";

//********** Thunks **********//
export const getEvenement = createAsyncThunk(
  "evenement/getEvenement",
  async (_, thunkAPI) => {
    const response = await EvenementDataService.get();
    return response.data;
  }
);

export const updateEvenement = createAsyncThunk(
  "evenement/updateEvenement",
  async (evenementToUpdate: Evenement, thunkAPI) => {
    const response = await EvenementDataService.updateEvenement(
      evenementToUpdate
    );
    return response.data;
  }
);

//********** Slice **********//
export const evenementAdapter = createEntityAdapter<Evenement>();

export const evenementSlice = createSlice({
  name: "evenement",
  initialState: evenementAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEvenement.fulfilled, (state, action) => {
      evenementAdapter.setOne(state, action.payload);
    });
    builder.addCase(updateEvenement.fulfilled, (state, action) => {
      const evenementToUpdate: Update<Evenement> = {
        id: action.payload.updatedEvenement.id,
        changes: {
          ...action.payload.updatedEvenement,
        },
      };
      evenementAdapter.updateOne(state, evenementToUpdate);
    });
  },
});

//********** Actions **********//
export const {} = evenementSlice.actions;

export default evenementSlice.reducer;
