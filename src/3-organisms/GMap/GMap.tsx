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
import { MainMenuUtil } from "../../services/types";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";

const GMap = (props: Props) => {
  const { racePoints, onMapClick, onRacePointRightClick, onMarkerDrop } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtil;
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

  const onMapLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    const lastPoint = racePoints[racePoints.length - 1];
    //map.fitBounds(mode==="intersection"?lastPoint:bounds);
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
      {racePoints.map((racePoint, index) => {
        const latlng = new google.maps.LatLng(
          Number(racePoint.latitude),
          Number(racePoint.longitude)
        );
        return (
          <CustomMarker
            key={racePoint.id}
            id={racePoint.id.toString()}
            position={latlng}
            label={`${index + 1}`}
            draggable={mode === "intersection"}
            onMarkerRightClick={onRacePointRightClick}
            onMarkerDrop={onMarkerDrop}
          />
        );
      })}
      <Polyline
        path={racePoints.map(
          (racePoint) =>
            new google.maps.LatLng(
              Number(racePoint.latitude),
              Number(racePoint.longitude)
            )
        )}
      />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default GMap;
