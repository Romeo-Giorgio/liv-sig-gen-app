//********** Imports **********//
import { Signaler } from "../SignalerInput/SignalerInput.types";


//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current signaler. */
  selectedSignaler?:Signaler;
  /** Signalers list */
  signalersList?:Signaler[];
  /** Callback fired when selected signaler changes. */
  onSelectedSignalerChange: (value?: Signaler) => void;
  /** Callback fired when signaler edit button is clicked. */
  onSignalerEdit: (id:string) => void;
  /** Callback fired when signaler delete button is clicked. */
  onSignalerDelete: (id:string) => void;
  };
  