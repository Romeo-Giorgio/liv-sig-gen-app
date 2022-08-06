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

export const markerByType: Record<MarkerType, string> = {
  [MarkerType.INTERSECTION]: "../../resources/red-blank.png",
  [MarkerType.CURRENTINTERSECTION]: "../../resources/pink-blank.png",
  [MarkerType.SIGNALER]: "../../resources/blue-blank.png",
  [MarkerType.CURRENTSIGNALER]: "../../resources/puurple-blank.png",
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
