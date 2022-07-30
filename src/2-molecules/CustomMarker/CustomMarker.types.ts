//********** Imports **********//
import { MarkerProps } from "@react-google-maps/api";
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
    url: "src\\resources\\intersectionMarker.svg",

    // fillColor: "#DC2903",
    // scale: 7,
  },
  [MarkerType.CURRENTINTERSECTION]: {
    url: "src\\resources\\intersectionMarker.svg",
    // fillColor: "#0331DC",
    // scale: 7,
  },
  [MarkerType.SIGNALER]: {
    url: "src\\resources\\intersectionMarker.svg",
    // fillColor: "#DC2903",
    // scale: 7,
  },
  [MarkerType.CURRENTSIGNALER]: {
    url: "src\\resources\\intersectionMarker.svg",
    // fillColor: "#0331DC",
    // scale: 7,
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
