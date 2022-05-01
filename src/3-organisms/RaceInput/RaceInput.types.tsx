//********** Props **********//
import ObjectId from "bson-objectid";

//********** Types **********//
export interface Race {
  /** ID of the race. */
  _id: ObjectId;
  /** Name of the race. */
  name: string;
  /** Description of the race. */
  description?: string;
}

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current race. */
  race?: Race;
  /** Callback fired when one of the current race properties is changed. */
  onRaceChange: (value?: Race) => void;
  /** Callback fired when race's add point  button is clicked. */
  onAddPoint: () => void;
  /** Callback fired when the race creation form is submited. */
  onCreateRace: () => void;
}
