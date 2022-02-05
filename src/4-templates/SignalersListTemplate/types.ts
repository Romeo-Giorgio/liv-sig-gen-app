//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";
import { Signaler } from "../../3-organisms/SignalerInput/types";


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
  /** Callback fired when signaler delete button is clicked. */
  onSignalerDelete: (id:string) => void;
  /** Callback fired when + button is clicked under the list. */
  askToAddSignaler: () => void;
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