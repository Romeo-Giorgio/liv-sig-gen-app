import React, { useContext, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Props } from "./types";
import { GOOGLE_MAP_API_KEY } from "../../api";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { MapUtils } from "../../services/types";
import { useDispatch, useSelector } from "../../store";
import {
  createRacePoint,
  getRacePointsListById,
  racePointAdapter,
} from "../../slices/racePointSlice";
import { randomId } from "../../const";

const GMap = (_: Props) => {
  const { drawMode, newRaceId, selectedRaceId, setSelectedRaceId } = useContext(
    MapUtilsContext
  ) as MapUtils;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });
  const containerStyle = {
    width: 10000,
    minHeight: "100vh",
    maxWidth: "100vw",
  };
  const center = {
    lat: 49,
    lng: 2,
  };

  const [map, setMap] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRaceId != null) {
      dispatch(getRacePointsListById(selectedRaceId));
    }
  }, [selectedRaceId]);

  useEffect(() => {
    console.log(newRaceId);
  }, [newRaceId]);

  const racePoints = useSelector((state) =>
    racePointAdapter.getSelectors().selectAll(state.racePoints)
  );

  const onMapLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onMapUnmount = React.useCallback(function callback(map) {
    setMap(undefined);
  }, []);

  const onMapClick = React.useCallback(
    function handleClick(event) {
      if (drawMode && newRaceId != null) {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setSelectedRaceId(newRaceId);
        dispatch(
          createRacePoint({
            id: randomId(10),
            latitude: lat,
            longitude: lng,
            raceId: newRaceId,
            nb: 0,
          })
        );
      }
    },
    [drawMode, newRaceId]
  );
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      onClick={onMapClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {racePoints.map((racePoint) => {
        const latlng = new google.maps.LatLng(
          Number(racePoint.longitude),
          Number(racePoint.latitude)
        );
        return <Marker key={racePoint.id} position={latlng} />;
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GMap;
