//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Callback fired when Tracks button button is clicked. */
  onTracksButtonClick?: () => void;
  /** Callback fired when Intersections button is clicked. */
  onIntersectionsButtonClick?: () => void;
  /** Callback fired when Signalers button is clicked. */
  onSignalersButtonClick?: () => void;
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
  /** Styles applied to the appBar. */
  appBar?:never;
  /** Styles applied to the icon that is selected. */
  iconSelected?:never;
}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;