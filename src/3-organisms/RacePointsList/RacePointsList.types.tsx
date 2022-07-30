//********** Imports **********//
import { RacePoint } from "../../services/types";

//********** Props **********//
export interface Props {
  /** Current racePoint. */
  selectedRacePointId?: number;
  /** RacePoints list */
  racePointsList?: RacePoint[];
  /** Callback fired when selected racePoint changes. */
  onSelectedRacePointChange: (value?: RacePoint) => void;
  /** Callback fired when racePoint delete button is clicked. */
  onRacePointDelete: (id: number) => void;
}
