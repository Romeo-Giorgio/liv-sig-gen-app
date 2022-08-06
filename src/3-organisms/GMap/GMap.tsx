import React, { useContext, useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Props } from "./GMap.types";
import { GOOGLE_MAP_API_KEY } from "../../api";
import CustomMarker from "../../2-molecules/CustomMarker";
import { MainMenuUtils, MapUtils } from "../../services/types";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MarkerType } from "../../2-molecules/CustomMarker/CustomMarker.types";
import { useDispatch, useSelector } from "../../store";
import {
  getAllRacePoints,
  racePointAdapter,
} from "../../slices/racePointSlice";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";

const GMap = (props: Props) => {
  const {
    races,
    onMapClick,
    onRacePointRightClick,
    onRacePointMarkerDrop,
    signalers,
  } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;
  const { setSelectedRace } = useContext(MapUtilsContext) as MapUtils;
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
    if (mode === "export" || mode === "signaler") {
      setSelectedRace(undefined);
      dispatch(getAllRacePoints());
    }
  }, [mode]);

  const racePoints = useSelector((state) =>
    racePointAdapter.getSelectors().selectAll(state.racePoints)
  );
  const onMapLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();

    setMap(map);
  }, []);

  const onMapUnmount = React.useCallback(function callback(map) {
    setMap(undefined);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      onClick={onMapClick}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {races.map((race) => (
        <React.Fragment key={`ReactFragmentRace-${race.id}`}>
          {racePoints
            .filter((racePoint) => racePoint.raceId === race.id)
            .map((racePoint, index) => {
              const latlng = new google.maps.LatLng(
                Number(racePoint.latitude),
                Number(racePoint.longitude)
              );
              return (
                <CustomMarker
                  key={`racePointMarker-${racePoint.id}`}
                  id={racePoint.id.toString()}
                  position={latlng}
                  markerType={MarkerType.INTERSECTION}
                  label={`${index + 1}`}
                  draggable={mode === "intersection"}
                  onMarkerRightClick={onRacePointRightClick}
                  onMarkerDrop={onRacePointMarkerDrop}
                />
              );
            })}
          <Polyline
            key={`polyline-${race.id}`}
            path={racePoints
              .filter((racePoint) => racePoint.raceId === race.id)
              .map(
                (racePoint) =>
                  new google.maps.LatLng(
                    Number(racePoint.latitude),
                    Number(racePoint.longitude)
                  )
              )}
            options={{ strokeColor: race.color }}
          />
        </React.Fragment>
      ))}

      {signalers.map((signaler, index) => {
        const latlng = new google.maps.LatLng(
          Number(signaler.latitude),
          Number(signaler.longitude)
        );
        return (
          <CustomMarker
            key={`signalerMarker-${signaler.id}`}
            id={signaler.id}
            position={latlng}
            markerType={MarkerType.SIGNALER}
            label={`${signaler.firstName} ${signaler.lastName}`}
            draggable={mode === "signaler"}
          />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GMap;
