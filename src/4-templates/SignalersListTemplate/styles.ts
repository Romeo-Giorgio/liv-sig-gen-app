//********** Imports **********//
import { Theme } from "@material-ui/core"
import { createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { Props, StylesKey, StylesProps } from "./types";

//********** Styles **********//
const styles = (theme: Theme) =>
  createStyles<StylesKey, Props>({
    // Theme overrides
    root: {
       maxWidth: 200,
    },
    item:{
      marginTop: "5px",
      marginRight:"5px",
    },    
  });

export default styles;

//********** Classes **********//
export const rootClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const {  root } = classes;
  return clsx( root, className);
};

export const itemClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { item } = classes;
  return clsx( item, className);
};