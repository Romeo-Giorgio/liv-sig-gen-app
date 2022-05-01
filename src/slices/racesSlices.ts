//********** Imports **********//
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ObjectID from "bson-objectid";
import { createDocumentAdapter } from "redux-document-adapter";
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
export const racesAdapter = createDocumentAdapter<Race>({
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const racesSlice = createSlice({
  name: "races",
  initialState: racesAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRacesList.fulfilled, (state, action) => {
      console.log("extrareducer", action.payload);
      const racesList: Race[] = action.payload.map((race) => ({
        ...race,
        _id: new ObjectID(action.payload[0]._id.str),
      }));
      console.log(racesList);
      racesAdapter.setAll(state, racesList);
    });
    builder.addCase(createRace.fulfilled, (state, action) => {
      racesAdapter.addOne(state, action.payload);
    });
  },
});

//********** Actions **********//
export const {} = racesSlice.actions;

export default racesSlice.reducer;
