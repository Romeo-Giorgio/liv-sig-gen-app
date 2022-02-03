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
    box:{
      width: '100%', 
      maxWidth: 360, 
      backgroundColor: theme.palette.background.default,
      borderRadius:theme.shape.borderRadius,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    },
    item:{
      borderRadius:theme.shape.borderRadius,
      "&:hover":{
        backgroundColor: theme.palette.info.light,
      },
    },
    itemIcon:{
      borderRadius:100,
      minWidth:25,
      "&:hover":{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
    }
  });

export default styles;

//********** Classes **********//
export const boxClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { box, root } = classes;
  return clsx(box, root, className);
};

export const itemClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { item, root } = classes;
  return clsx(item, root, className);
};

export const itemIconClasses = (props: StylesProps) => {
  const { classes, className } = props;
  if (classes == null) return className;

  const { itemIcon, root } = classes;
  return clsx(itemIcon, root, className);
};