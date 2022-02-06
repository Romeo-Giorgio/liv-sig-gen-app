//********** Imports **********//
import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Props, StylesKey, StylesProps } from "./types";

//********** Styles **********//
const styles = (theme: Theme) =>
  createStyles<StylesKey, Props>({
    // Theme overrides
    root: {},
    appBar: {
      borderRadius: "50px",
      width: "200px",
      backgroundColor: theme.palette.background.paper,
    },
    iconSelected: {
      color: theme.palette.primary.main,
    }
  });

export default styles;

//********** Classes **********//
export const menuClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { appBar, root } = classes;
  return clsx(appBar, root, className);
};

export const iconClasses = (props: StylesProps, selected:boolean) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { iconSelected } = classes;
  return clsx( className, {
    [iconSelected]: selected,
  });
};
