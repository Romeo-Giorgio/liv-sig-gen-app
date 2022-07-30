//********** Imports **********//
import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  Update,
} from "@reduxjs/toolkit";
import RacePointsDataService from "../services/racePoints.service";
import { RacePoint } from "../services/types";

//********** Thunks **********//
export const getAllRacePoints = createAsyncThunk(
  "racePoints/getAllRacePoints",
  async (_, thunkAPI) => {
    const response = await RacePointsDataService.getAll();
    return response.data;
  }
);
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

export const deleteRacePointById = createAsyncThunk(
  "racePoints/deleteRacePointById",
  async (id: string, thunkAPI) => {
    const response = await RacePointsDataService.delete(id);
    return response.data;
  }
);

export const updateRacePointCoordinates = createAsyncThunk(
  "racePoints/updateRacePointCoordinates",
  async (racePointToUpdate: RacePoint, thunkAPI) => {
    const response = await RacePointsDataService.updateCoordinates(
      racePointToUpdate
    );
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
    builder.addCase(getAllRacePoints.fulfilled, (state, action) => {
      racePointAdapter.setAll(state, action.payload);
    });
    builder.addCase(getRacePointsListById.fulfilled, (state, action) => {
      racePointAdapter.setAll(state, action.payload);
    });
    builder.addCase(createRacePoint.fulfilled, (state, action) => {
      racePointAdapter.addOne(state, action.payload);
    });
    builder.addCase(deleteRacePointById.fulfilled, (state, action) => {
      racePointAdapter.removeOne(state, action.payload.deletedId);
    });
    builder.addCase(updateRacePointCoordinates.fulfilled, (state, action) => {
      const racePointToUpdate: Update<RacePoint> = {
        id: action.payload.updatedRacePoint.id,
        changes: { ...action.payload.updatedRacePoint },
      };
      racePointAdapter.updateOne(state, racePointToUpdate);
    });
  },
});

//********** Actions **********//
export const {} = racePointSlice.actions;

export default racePointSlice.reducer;
