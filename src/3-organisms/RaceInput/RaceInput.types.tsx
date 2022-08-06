//********** Imports **********//
import { Race } from "../../services/types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current race. */
  race?: Race;
  /** Callback fired when race's add point  button is clicked. */
  onAddPoint: () => void;
  /** Callback fired when save button is clicked. */
  onRaceSave: () => void;
}
