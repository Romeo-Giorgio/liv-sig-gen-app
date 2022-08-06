//********** Imports **********//
import { Signaler } from "../../services/types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current signaler. */
  signaler?: Signaler;
  /** Signalers list */
  signalersList?: Signaler[];
  /** Callback fired when save button is clicked. */
  onSignalerSave: () => void;
}
