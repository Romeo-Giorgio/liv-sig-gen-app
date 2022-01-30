//********** Imports **********//
import { Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Props, StylesKey, StylesProps } from "./types";

//********** Styles **********//
const styles = (theme: Theme) =>
  createStyles<StylesKey, Props>({
    // Theme overrides
    root: {
      borderRadius: theme.shape.borderRadius,
      position: "absolute",
      top: 0,
      left: "calc(50% - 116px)",
      width: 232,
    },
    panel:{
      backgroundColor:"none",
      boxShadow:"none",
    }
  });

export default styles;

//********** Classes **********//
export const panelClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { panel, root } = classes;
  return clsx(panel, root, className);
};
