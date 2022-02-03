//********** Imports **********//
import { Theme } from "@material-ui/core"
import { createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Props, StylesKey, StylesProps } from "./types";

//********** Styles **********//
const styles = (theme: Theme) =>
  createStyles<StylesKey, Props>({
    // Theme overrides
    root: {},
    spacedRow:{
      marginTop:10,
    },
    select:{
      width:195
    },
  });

export default styles;

//********** Classes **********//
export const spacedRowClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { spacedRow, root } = classes;
  return clsx(spacedRow, root, className);
};

export const selectClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { select } = classes;
  return clsx(select,  className);
};
