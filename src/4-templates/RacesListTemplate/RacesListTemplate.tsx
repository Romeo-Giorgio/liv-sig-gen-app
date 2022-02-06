//********** Imports **********//
import { Props } from "./types";
import {
  Grid,
  IconButton,
  withStyles 
} from "@material-ui/core";
import styles, { itemClasses, rootClasses } from "./styles";
import RacesList from "../../3-organisms/RacesList";
import { Add, Close } from "@material-ui/icons";

//********** Component **********//
const RacesListTemplate = (props: Props) => {
  const {askToAddRace, onSelectedRaceChange, onRaceEdit, onRaceDelete, selectedRace, racesList, inputOpen} = props;

  return (
    <Grid container direction="column" alignItems="flex-end" className={rootClasses(props)}>
      <Grid item xs>
        <RacesList 
          onSelectedRaceChange={onSelectedRaceChange}
          onRaceEdit={onRaceEdit}
          onRaceDelete={onRaceDelete}
          selectedRace={selectedRace}
          racesList={racesList}
        />
      </Grid>
      <Grid item xs className={itemClasses(props)}>
        <IconButton
          onClick={askToAddRace}
        >
          {inputOpen ? <Close/> : <Add/>}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "RacesListTemplate",
  })(RacesListTemplate);