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
    spacedItem:{
      marginTop:10,
    },
    textArea:{
      maxWidth: 175,
      minWidth: 175,
      maxHeight: 90,
    },
  });

export default styles;

//********** Classes **********//
export const spacedItemClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { spacedItem, root } = classes;
  return clsx(spacedItem, root, className);
};

export const textAreaClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { textArea } = classes;
  return clsx(textArea,  className);
};
