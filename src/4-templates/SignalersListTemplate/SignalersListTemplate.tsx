//********** Imports **********//
import { Props } from "./SignalersListTemplate.types";
import { Grid, IconButton } from "@mui/material";
import { StyledGridItem, StyledGridRoot } from "./SignalersListTemplate.slots";
import SignalersList from "../../3-organisms/SignalersList";
import { Add, Close } from "@mui/icons-material";
import { useContext } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MainMenuUtils } from "../../services/types";

//********** Component **********//
const SignalersListTemplate = (props: Props) => {
  const {
    askToAddSignaler,
    onSelectedSignalerChange,
    onSignalerEdit,
    onSignalerDelete,
    selectedSignaler,
    signalersList,
    inputOpen,
  } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;

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
      {mode === "signaler" && (
        <StyledGridItem item xs>
          <IconButton onClick={askToAddSignaler}>
            {inputOpen ? <Close /> : <Add />}
          </IconButton>
        </StyledGridItem>
      )}
    </StyledGridRoot>
  );
};

export default SignalersListTemplate;
