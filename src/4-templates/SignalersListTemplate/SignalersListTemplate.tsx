//********** Imports **********//
import { Props } from "./types";
import {
  Grid,
  IconButton,
  withStyles 
} from "@material-ui/core";
import styles, { itemClasses, rootClasses } from "./styles";
import SignalersList from "../../3-organisms/SignalersList";
import { Add } from "@material-ui/icons";

//********** Component **********//
const SignalersListTemplate = (props: Props) => {
  const {askToAddSignaler, onSelectedSignalerChange, onSignalerDelete, selectedSignaler, signalersList} = props;

  return (
    <Grid container direction="column" alignItems="flex-end" className={rootClasses(props)}>
      <Grid item xs>
        <SignalersList 
          onSelectedSignalerChange={onSelectedSignalerChange}
          onSignalerDelete={onSignalerDelete}
          selectedSignaler={selectedSignaler}
          signalersList={signalersList}
        />
      </Grid>
      <Grid item xs className={itemClasses(props)}>
        <IconButton
          onClick={askToAddSignaler}
        >
          <Add/>
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "SignalersListTemplate",
  })(SignalersListTemplate);