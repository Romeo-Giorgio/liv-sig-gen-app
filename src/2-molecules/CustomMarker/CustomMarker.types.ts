//********** Imports **********//
import { GoogleMap, MarkerProps } from "@react-google-maps/api";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

//********** Types **********//
interface MarkerTypeInfo {
  url: string;
  fillColor: string;
  scale: number;
}
export enum MarkerType {
  INTERSECTION,
  CURRENTINTERSECTION,
  SIGNALER,
  CURRENTSIGNALER,
}

export const markerByType: Record<MarkerType, google.maps.Icon> = {
  [MarkerType.INTERSECTION]: {
    url: "http://maps.google.com/mapfiles/kml/paddle/red-blank.png",
    scaledSize: new google.maps.Size(37, 37),
    labelOrigin: new google.maps.Point(18, 12),
  },
  [MarkerType.CURRENTINTERSECTION]: {
    url: "http://maps.google.com/mapfiles/kml/paddle/blu-blank.png",
    scaledSize: new google.maps.Size(37, 37),
    labelOrigin: new google.maps.Point(18, 12),
  },
  [MarkerType.SIGNALER]: {
    url: "http://maps.google.com/mapfiles/kml/paddle/purple-blank.png",
    scaledSize: new google.maps.Size(37, 37),
    labelOrigin: new google.maps.Point(17, -10),
  },
  [MarkerType.CURRENTSIGNALER]: {
    url: "http://maps.google.com/mapfiles/kml/paddle/pink-blank.png",
    scaledSize: new google.maps.Size(37, 37),
    labelOrigin: new google.maps.Point(17, -10),
  },
};

//********** Props **********//
export interface Props extends MarkerProps {
  /** Id of the marker. */
  id: string;
  /** Callback fired when marker is right clicked. */
  onMarkerRightClick?: (event: any, markerId: string) => void;
  /** Callback fired when marker is dropped. */
  onMarkerDrop?: (event: any, markerId: string) => void;
  /** Marker's type. */
  markerType: MarkerType;
}
