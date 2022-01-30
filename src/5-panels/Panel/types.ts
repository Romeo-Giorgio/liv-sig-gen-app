//********** Imports **********//
import { StyledComponentProps, WithStyles } from "@material-ui/core";

//********** Props **********//
export interface Props {
  /** CSS class applied to the root element. */
  className?: string;
  /** Component's content. */
  children?: React.ReactNode;
  /**
   * If true, a close button will be displayed on the right of the header.
   * @default false
   */
  closeable?: boolean;
  /**
   * If true, the body will be displayed.
   */
  hasBody?: boolean;
  /**
   * If true, the header will be displayed.
   */
  hasHeader?: boolean;
  /** Header's content (components like buttons or fields, etc.). */
  headerNode?: React.ReactNode;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** CSS style applied to the root element. */
  style?: React.CSSProperties;
  /** Header's title. */
  title?: string;
}

//********** Theme **********//
export interface ThemeOverrides {
  /** Styles applied to the root element. */
  root?: never;
  /** Styles applied to the panel content element. */
  panelContent?: never;
}
export type ClassKey = keyof ThemeOverrides;

export interface ThemeProps {}

//********** Styles **********//
interface StylesClasses extends ThemeOverrides {}
export type StylesKey = keyof StylesClasses;
export type ClassesProp = StyledComponentProps<StylesKey>["classes"];
export type StylesProps = Props & ThemeProps & Partial<WithStyles<StylesKey>>;
