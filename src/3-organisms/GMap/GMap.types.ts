//********** Imports **********//
import { Race, RacePoint, Signaler } from "../../services/types";

//********** Props **********//
export interface Props {
  /** Displayed Races. */
  races: Race[];
  /** Callback fired when map is clicked. */
  onMapClick: (event: any) => void;
  /** Callback fired when racepoint marker is right clicked. */
  onRacePointRightClick: (event: any, markerId: string) => void;
  /** Callback fired when racePoint marker is dropped. */
  onRacePointMarkerDrop: (event: any, markerId: string) => void;
  /** Signalers displayed as markers. */
  signalers: Signaler[];
}
