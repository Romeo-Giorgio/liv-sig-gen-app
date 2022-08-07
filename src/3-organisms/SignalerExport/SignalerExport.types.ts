//********** Imports **********//
import { Evenement, Signaler } from "../../services/types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current evenement. */
  evenement?: Evenement;
  /** Callback fired to set the current evenement. */
  setEvenement: (newEvenement: Evenement) => void;
  /** Callback fired to save the evenement. */
  saveEvenement: () => void;
}
