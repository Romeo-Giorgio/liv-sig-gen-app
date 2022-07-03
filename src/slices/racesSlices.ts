//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { Race } from "../3-organisms/RaceInput/RaceInput.types";
import RacesDataService from "../services/races.service";

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
  },
});

//********** Actions **********//
export const {} = racesSlice.actions;

export default racesSlice.reducer;
