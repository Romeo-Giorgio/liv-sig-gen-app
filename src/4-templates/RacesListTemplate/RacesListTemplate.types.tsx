//********** Imports **********//
import { Race } from "../../services/types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Boolean to manage the Add button's icon . */
  inputOpen?: boolean;
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
  /** Callback fired when + button is clicked under the list. */
  askToAddRace: () => void;
}
