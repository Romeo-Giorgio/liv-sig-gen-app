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
  /** Callback fired when one of the current signaler properties is changed. */
  onSignalerChange: (value?: Signaler) => void;
  /** Callback fired when one of the current signaler properties is fully changed and the user leave one of the fields. */
  onSignalerBlur: (value?: Signaler) => void;
}
