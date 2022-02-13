//********** Imports **********//
import Box, { BoxProps } from "@mui/material/Box";
import List, { ListProps } from "@mui/material/List";
import ListItem, { ListItemProps } from "@mui/material/ListItem";
import ListItemText, { ListItemTextProps } from "@mui/material/ListItemText";
import ListItemIcon, { ListItemIconProps } from "@mui/material/ListItemIcon";
import { styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledBox = styled(Box)<BoxProps>(({})=>({
  width: '100%', 
  maxWidth: "280px",
  maxHeight: "200px",
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
}));

export const StyledList = styled(List)<ListProps>(({theme})=>({
  width: "280px",
  maxHeight: "200px",
  flexGrow: 1,
  overflow: "auto",
  minHeight:" 100%",
}));

export const StyledListItem = styled(ListItem)<ListItemProps>(({theme})=>({
  borderRadius:theme.shape.borderRadius,
  width:"100%",
  "&:hover":{
    backgroundColor: theme.palette.info.light,
  },
}));

export const StyledListItemText = styled(ListItemText)<ListItemTextProps>(({theme})=>({
  marginRight:"10px",
}));

export const StyledListItemIcon = styled(ListItemIcon)<ListItemIconProps>(({theme})=>({
  borderRadius:100,
      minWidth:25,
      "&:hover":{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
}));
