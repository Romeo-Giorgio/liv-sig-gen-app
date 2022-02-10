//********** Imports **********//
import Grid, {GridProps} from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledGridRoot = styled(Grid)<GridProps>(({})=>({
  maxWidth: 280,
}));

export const StyledGridItem = styled(Grid)<GridProps>(({})=>({
  marginTop: "5px",
  marginRight:"5px",
}));