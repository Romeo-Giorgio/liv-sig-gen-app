//********** Imports **********//
import { Signaler } from "../../3-organisms/SignalerInput/SignalerInput.types";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Boolean to manage the Add button's icon . */
  inputOpen?: boolean;
  /** Current signaler. */
  selectedSignaler?: Signaler;
  /** Signalers list */
  signalersList?: Signaler[];
  /** Callback fired when selected signaler changes. */
  onSelectedSignalerChange: (value?: Signaler) => void;
  /** Callback fired when signaler edit button is clicked. */
  onSignalerEdit: (id: string) => void;
  /** Callback fired when signaler delete button is clicked. */
  onSignalerDelete: (id: string) => void;
  /** Callback fired when + button is clicked under the list. */
  askToAddSignaler: () => void;
}
