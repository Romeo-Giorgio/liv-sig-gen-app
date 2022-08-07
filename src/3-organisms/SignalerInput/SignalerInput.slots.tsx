//********** Imports **********//
import Select, { SelectProps } from "@mui/material/Select";
import Grid, { GridProps } from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";

//********** Styles **********//
export const StyledSelect = styled(Select)<SelectProps>(({ theme }) => ({
  width: 195,
  height: 32,
}));

export const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  marginTop: 10,
}));

export const StyledTextareaAutosize = styled(
  TextareaAutosize
)<TextareaAutosizeProps>(({}) => ({
  maxWidth: 175,
  minWidth: 175,
  maxHeight: 90,
}));
