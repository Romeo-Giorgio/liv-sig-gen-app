//********** Imports **********//
import { Props } from "./SignalersListTemplate.types";
import {
  Grid,
  IconButton,
} from "@mui/material";
import { StyledGridItem, StyledGridRoot } from "./SignalersListTemplate.slots";
import SignalersList from "../../3-organisms/SignalersList";
import { Add, Close } from "@mui/icons-material";

//********** Component **********//
const SignalersListTemplate = (props: Props) => {
  const {askToAddSignaler, onSelectedSignalerChange, onSignalerEdit, onSignalerDelete, selectedSignaler, signalersList, inputOpen} = props;

  return (
    <StyledGridRoot container direction="column" alignItems="flex-end">
      <Grid item xs>
        <SignalersList 
          onSelectedSignalerChange={onSelectedSignalerChange}
          onSignalerEdit={onSignalerEdit}
          onSignalerDelete={onSignalerDelete}
          selectedSignaler={selectedSignaler}
          signalersList={signalersList}
        />
      </Grid>
      <StyledGridItem item xs>
        <IconButton
          onClick={askToAddSignaler}
        >
          {inputOpen ? <Close/> : <Add/>}
        </IconButton>
      </StyledGridItem>
    </StyledGridRoot>
  );
};

export default SignalersListTemplate;