//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  createAction,
  Update,
} from "@reduxjs/toolkit";
import RacesDataService from "../services/races.service";
import { Race } from "../services/types";

//********** Thunks **********//
export const getRacesList = createAsyncThunk(
  "races/getRacesList",
  async (_, thunkAPI) => {
    const response = await RacesDataService.getAll();
    return response.data;
  }
);

export const createRace = createAsyncThunk(
  "races/createRace",
  async (data: Race, thunkAPI) => {
    const response = await RacesDataService.create(data);
    return response.data;
  }
);

export const deleteRace = createAsyncThunk(
  "races/deleteRace",
  async (id: string, thunkAPI) => {
    const response = await RacesDataService.delete(id);
    return response.data;
  }
);

export const updateRace = createAsyncThunk(
  "races/updateRace",
  async (raceToUpdate: Race, thunkAPI) => {
    const response = await RacesDataService.updateRace(raceToUpdate);
    return response.data;
  }
);

//********** Slice **********//
export const racesAdapter = createEntityAdapter<Race>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const racesSlice = createSlice({
  name: "races",
  initialState: racesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRacesList.fulfilled, (state, action) => {
      racesAdapter.setAll(state, action.payload);
    });
    builder.addCase(createRace.fulfilled, (state, action) => {
      racesAdapter.addOne(state, action.payload);
    });
    builder.addCase(deleteRace.fulfilled, (state, action) => {
      racesAdapter.removeOne(state, action.payload.deletedId);
    });
    builder.addCase(updateRace.fulfilled, (state, action) => {
      const raceToUpdate: Update<Race> = {
        id: action.payload.updatedRace.id,
        changes: {
          ...action.payload.updatedRace,
        },
      };
      racesAdapter.updateOne(state, raceToUpdate);
    });
  },
});

//********** Actions **********//
export const {} = racesSlice.actions;

export default racesSlice.reducer;
