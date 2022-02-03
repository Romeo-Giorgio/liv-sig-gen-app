//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";
import { Signaler } from "../SignalerInput/types";


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
  /** Styles applied to the item's icon. */
  itemIcon?: never;
}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;