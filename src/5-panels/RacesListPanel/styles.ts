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
    panel: {
      borderRadius: theme.shape.borderRadius,
      backgroundColor:"none",
    },
    listPanel: {
      width: 260,
      position: "absolute",
      top: 0,
      left: 8,},
    inputPanel: {
      maxWidth: "calc(40%)",
      position: "absolute",
      bottom: 10,
      left: 280,
    },
  });

export default styles;

//********** Classes **********//
export const panelClasses = (props: StylesProps, type:string) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { panel, root, listPanel, inputPanel } = classes;
  return clsx(panel, root, className, {
    [listPanel]: type === "list",
    [inputPanel]: type === "input",
  });
};
