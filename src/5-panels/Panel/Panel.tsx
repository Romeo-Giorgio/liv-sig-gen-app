//********** Imports **********//
import React from "react";

import { Card, CardContent } from "@material-ui/core";
import { cardClasses } from "./styles";
import { Props, StylesProps } from "./types";

//********** Component **********//
export const Panel = (p: Props) => {
  const props = p as StylesProps;
  const {
    classes,
    children,
    style,
  } = props;

  return (
    <Card className={cardClasses(props)} style={style}>
        <CardContent className={classes?.panelContent}>{children}</CardContent>
    </Card>
  );
};
Panel.defaultProps = {} as const;
Panel.displayName = "Panel";

export default Panel;
