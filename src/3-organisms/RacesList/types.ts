//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";
import { Race } from "../RaceInput/types";


//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Current race. */
  selectedRace?:Race;
  /** Races list */
  racesList?:Race[];
  /** Callback fired when selected race changes. */
  onSelectedRaceChange: (value?: Race) => void;
  /** Callback fired when race edit button is clicked. */
  onRaceEdit: (id:string) => void;
  /** Callback fired when race delete button is clicked. */
  onRaceDelete: (id:string) => void;
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
  /** Styles applied to the box element containing the list. */
  box?: never;
  /** Styles applied to the item elements in the list. */
  item?: never;
  /** Styles applied to the text elements. */
  itemText?: never;
  /** Styles applied to the item's icon. */
  itemIcon?: never;
}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;