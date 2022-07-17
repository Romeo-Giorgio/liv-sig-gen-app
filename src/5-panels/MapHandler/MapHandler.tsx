//********** Imports **********//
import React, { useContext, useEffect } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import GMap from "../../3-organisms/GMap/GMap";
import { randomId } from "../../const";
import { MainMenuUtil, MapUtils } from "../../services/types";
import { createRacePoint, getRacePointsListById, racePointAdapter } from "../../slices/racePointSlice";
import { useDispatch, useSelector } from "../../store";

//********** Component **********//
const MapHandler = () => {
  const racePoints = useSelector((state) =>
    racePointAdapter.getSelectors().selectAll(state.racePoints)
  );
	const { drawMode, newRaceId, selectedRaceId, setSelectedRaceId } = useContext(
    MapUtilsContext
  ) as MapUtils;
	const {mode, setMode} = useContext(MainMenuContext) as MainMenuUtil;
  const dispatch = useDispatch();

	useEffect(() => {
    if (selectedRaceId != null) {
      dispatch(getRacePointsListById(selectedRaceId));
    }
  }, [selectedRaceId]);

	const onMapClick = (event:any)=>{
		if (mode === "intersection" && selectedRaceId != null) {
			const lat = event.latLng.lat();
			const lng = event.latLng.lng();
			dispatch(
				createRacePoint({
					id: randomId(10),
					latitude: lat,
					longitude: lng,
					raceId: selectedRaceId,
					nb: Date.now(),
				})
			);
		}
	};

	const onRacePointRightClick = (event:any)=>{
		console.log(event)
	};
  return (
    <GMap racePoints={racePoints} onMapClick={onMapClick} onRacePointRightClick={onRacePointRightClick}/>
  );
};

export default MapHandler;
