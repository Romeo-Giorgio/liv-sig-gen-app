//********** Imports **********//
import React, { useContext, useEffect } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import GMap from "../../3-organisms/GMap/GMap";
import { randomId } from "../../const";
import { MainMenuUtil, MapUtils } from "../../services/types";
import {
  createRacePoint,
  deleteRacePointById,
  getRacePointsListById,
  racePointAdapter,
  updateRacePointCoordinates,
} from "../../slices/racePointSlice";
import { useDispatch, useSelector } from "../../store";

//********** Component **********//
const MapHandler = () => {
  const racePoints = useSelector((state) =>
    racePointAdapter.getSelectors().selectAll(state.racePoints)
  );
  const { selectedRaceId } = useContext(MapUtilsContext) as MapUtils;
  const { mode } = useContext(MainMenuContext) as MainMenuUtil;
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRaceId != null) {
      dispatch(getRacePointsListById(selectedRaceId));
    }
  }, [selectedRaceId]);

  const onMapClick = (event: any) => {
    if (mode === "intersection" && selectedRaceId != null) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      dispatch(
        createRacePoint({
          id: Date.now(),
          latitude: lat,
          longitude: lng,
          raceId: selectedRaceId,
        })
      );
    }
  };

  const onRacePointRightClick = (event: any, racePointId: string) => {
    if (mode === "intersection" && selectedRaceId != null) {
      dispatch(deleteRacePointById(racePointId));
    }
  };

  const onRacePointDrop = (event: any, racePointId: string) => {
    if (mode === "intersection" && selectedRaceId != null) {
      const newLat = event.latLng.lat();
      const newLng = event.latLng.lng();
      dispatch(
        updateRacePointCoordinates({
          id: Number(racePointId),
          raceId: selectedRaceId!,
          latitude: newLat,
          longitude: newLng,
        })
      );
    }
  };
  return (
    <GMap
      racePoints={racePoints}
      onMapClick={onMapClick}
      onRacePointRightClick={onRacePointRightClick}
      onMarkerDrop={onRacePointDrop}
    />
  );
};

export default MapHandler;
