//********** Imports **********//
import { MarkerProps } from "@react-google-maps/api";

//********** Props **********//
export interface Props extends MarkerProps {
  /** Id of the marker. */
  id: string;
  /** Callback fired when marker is right clicked. */
  onMarkerRightClick: (event: any, markerId: string) => void;
  /** Callback fired when marker is dropped. */
  onMarkerDrop: (event: any, markerId: string) => void;
}
