//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import RacePointsDataService from "../services/racePoints.service";
import { RacePoint } from "../services/types";

//********** Thunks **********//
export const getRacePointsListById = createAsyncThunk(
  "racePoints/getRacePointsListById",
  async (raceId: string, thunkAPI) => {
    const response = await RacePointsDataService.getAllByRaceId(raceId);
    return response.data;
  }
);

export const createRacePoint = createAsyncThunk(
  "racePoints/createRacePoint",
  async (data: RacePoint, thunkAPI) => {
    const response = await RacePointsDataService.create(data);
    return response.data;
  }
);

export const deleteRacePointByRaceId = createAsyncThunk(
  "racePoints/deleteRacePointByRaceId",
  async (id: string, thunkAPI) => {
    const response = await RacePointsDataService.delete(id);
    return response.data;
  }
);

//********** Slice **********//
export const racePointAdapter = createEntityAdapter<RacePoint>();

export const racePointSlice = createSlice({
  name: "racePoints",
  initialState: racePointAdapter.getInitialState({}),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRacePointsListById.fulfilled, (state, action) => {
      racePointAdapter.setAll(state, action.payload);
    });
    builder.addCase(createRacePoint.fulfilled, (state, action) => {
      racePointAdapter.addOne(state, action.payload);
    });
    builder.addCase(deleteRacePointByRaceId.fulfilled, (state, action) => {});
  },
});

//********** Actions **********//
export const {} = racePointSlice.actions;

export default racePointSlice.reducer;
