//********** Types **********//
export interface Race  {
  /** ID of the race. */
  id:string;
  /** Name of the race. */
  name?:string;
  /** Description of the race. */
  description?:string;
}

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current race. */
  race?:Race;
  /** Callback fired when one of the current race properties is changed. */
  onRaceChange: (value?: Race) => void;
  /** Callback fired when one of the current race properties is fully changed and the user leave one of the fields. */
  onRaceBlur: (value?: Race) => void;
  /** Callback fired when race's add point  button is clicked. */
  onAddPoint: () => void;
  };