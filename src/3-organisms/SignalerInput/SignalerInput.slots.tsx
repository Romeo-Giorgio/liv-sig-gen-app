//********** Imports **********//
import Select, {SelectProps} from "@mui/material/Select";
import Grid, {GridProps} from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledSelect = styled(Select)<SelectProps>(({theme})=>({
  width: 195,
  height: 32
}));

export const StyledGrid = styled(Grid)<GridProps>(({theme})=>({
  marginTop:10,
}));
