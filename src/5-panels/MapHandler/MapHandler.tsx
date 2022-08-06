//********** Imports **********//
import React, { useContext, useEffect } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import GMap from "../../3-organisms/GMap/GMap";
import { randomId } from "../../const";
import { MainMenuUtils, MapUtils, Race } from "../../services/types";
import {
  createRacePoint,
  deleteRacePointById,
  getRacePointsListById,
  updateRacePointCoordinates,
} from "../../slices/racePointSlice";
import { racesAdapter } from "../../slices/raceSlice";
import { updateSignaler, signalerAdapter } from "../../slices/signalerSlice";
import { useDispatch, useSelector } from "../../store";

//********** Component **********//
const MapHandler = () => {
  const races = useSelector((state) =>
    racesAdapter.getSelectors().selectAll(state.races)
  );
  const signalers = useSelector((state) =>
    signalerAdapter.getSelectors().selectAll(state.signalers)
  );
  const { selectedRace, selectedSignaler } = useContext(
    MapUtilsContext
  ) as MapUtils;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRace?.id != null) {
      dispatch(getRacePointsListById(selectedRace?.id));
    }
  }, [selectedRace?.id]);

  const onMapClick = (event: any) => {
    if (mode === "intersection" && selectedRace?.id != null) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      dispatch(
        createRacePoint({
          id: Date.now(),
          latitude: lat,
          longitude: lng,
          raceId: selectedRace?.id,
        })
      );
    } else if (mode === "signaler" && selectedSignaler != null) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      dispatch(
        updateSignaler({
          ...selectedSignaler,
          latitude: lat,
          longitude: lng,
        })
      );
    }
  };

  const onRacePointRightClick = (event: any, racePointId: string) => {
    if (mode === "intersection" && selectedRace?.id != null) {
      dispatch(deleteRacePointById(racePointId));
    }
  };

  const onRacePointDrop = (event: any, racePointId: string) => {
    if (mode === "intersection" && selectedRace?.id != null) {
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();
      dispatch(
        updateRacePointCoordinates({
          id: Number(racePointId),
          raceId: selectedRace?.id!,
          latitude: newLat,
          longitude: newLng,
        })
      );
    }
  };
  return (
    <GMap
      races={
        mode !== "export" && mode !== "signaler"
          ? races.filter((race: Race) => race.id === selectedRace?.id)
          : races
      }
      onMapClick={onMapClick}
      onRacePointRightClick={onRacePointRightClick}
      onRacePointMarkerDrop={onRacePointDrop}
      signalers={signalers}
    />
  );
};

export default MapHandler;
