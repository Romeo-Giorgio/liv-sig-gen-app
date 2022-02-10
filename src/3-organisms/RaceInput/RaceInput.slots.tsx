//********** Imports **********//
import TextareaAutosize, {TextareaAutosizeProps} from "@mui/material/TextareaAutosize";
import Grid, {GridProps} from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledTextareaAutosize = styled(TextareaAutosize)<TextareaAutosizeProps>(({})=>({
  maxWidth: 175,
  minWidth: 175,
  maxHeight: 90,
}));

export const SpacedGrid = styled(Grid)<GridProps>(({})=>({
  marginTop:10,
}));
