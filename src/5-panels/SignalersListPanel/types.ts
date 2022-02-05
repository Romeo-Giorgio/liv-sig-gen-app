//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
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
  /** Styles applied to the panel. */
  panel?:never;
  /** Styles applied to the list panel. */
  listPanel?:never;
  /** Styles applied to the input panel. */
  inputPanel?:never;
}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;