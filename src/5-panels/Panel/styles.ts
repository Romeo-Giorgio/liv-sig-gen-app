//********** Imports **********//
import { Theme } from "@material-ui/core";
import { createStyles, fade } from "@material-ui/core/styles";
import clsx from "clsx";

import { Props, StylesKey, StylesProps } from "./types";

//********** Styles **********//
const styles = (theme: Theme) =>
  createStyles<StylesKey, Props>({
    // Theme overrides
    root: {
      background: `${fade(theme.palette.background.default, 0.95)}`,
      backdropFilter: "blur(30px)",
    },
    panelContent: {
      padding: theme.spacing(1),
    },
  });

export default styles;

//********** Classes **********//
export const cardClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { root } = classes;
  return clsx(root, className);
};
