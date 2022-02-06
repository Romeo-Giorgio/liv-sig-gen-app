//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";
import { Race } from "../../3-organisms/RaceInput/types";


//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Boolean to manage the Add button's icon . */
  inputOpen?:boolean;
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
  /** Callback fired when + button is clicked under the list. */
  askToAddRace: () => void;
  };
  

  //********** Theme **********//
export interface ThemeOverrides {
  /** Styles applied to the root element. */
  root?: never;
  /** Styles applied to the items element. */
  item?: never;
}
export type ClassKey = keyof ThemeOverrides;

export interface ThemeProps {};

//********** Styles **********//
interface StylesClasses extends ThemeOverrides {}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;