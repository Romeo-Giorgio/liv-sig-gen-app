//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";

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
  

  //********** Theme **********//
export interface ThemeOverrides {
  /** Styles applied to the root element. */
  root?: never;
}
export type ClassKey = keyof ThemeOverrides;

export interface ThemeProps {};

//********** Styles **********//
interface StylesClasses extends ThemeOverrides {
  /** Styles applied to the item elements that need a space. */
  spacedItem?: never;
  /** Styles applied to the textArea element. */
  textArea?: never;
}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;