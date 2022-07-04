//********** Imports **********//
import ObjectId from "bson-objectid";
import { Race } from "../RaceInput/RaceInput.types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current race. */
  selectedRaceId?: string;
  /** Races list */
  racesList?: Race[];
  /** Callback fired when selected race changes. */
  onSelectedRaceChange: (value?: Race) => void;
  /** Callback fired when race edit button is clicked. */
  onRaceEdit: (id: string) => void;
  /** Callback fired when race delete button is clicked. */
  onRaceDelete: (id: string) => void;
}
