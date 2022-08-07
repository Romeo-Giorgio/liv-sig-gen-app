//********** Imports **********//
import { styled } from "@mui/material/styles";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "@mui/material/TextareaAutosize";

//********** Styles **********//

export const StyledTextareaAutosize = styled(
  TextareaAutosize
)<TextareaAutosizeProps>(({}) => ({
  maxWidth: 600,
  minWidth: 600,
  maxHeight: 90,
}));
