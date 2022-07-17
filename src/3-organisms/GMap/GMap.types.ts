//********** Imports **********//
import { RacePoint } from "../../services/types";

//********** Props **********//
export interface Props {
  /** Current race's points displayed as markers. */
  racePoints: RacePoint[];
  /** Callback fired when map is clicked. */
  onMapClick: (event: any) => void;
  /** Callback fired when racepoint marker is right clicked. */
  onRacePointRightClick: (event: any, markerId: string) => void;
  /** Callback fired when marker is dropped. */
  onMarkerDrop: (event: any, markerId: string) => void;
}
