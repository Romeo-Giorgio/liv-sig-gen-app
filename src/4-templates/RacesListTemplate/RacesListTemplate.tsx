//********** Imports **********//
import { Props } from "./RacesListTemplate.types";
import { Grid, IconButton } from "@mui/material";
import { StyledGridItem, StyledGridRoot } from "./RacesListTemplate.slots";
import RacesList from "../../3-organisms/RacesList";
import { Add, Close } from "@mui/icons-material";

//********** Component **********//
const RacesListTemplate = (props: Props) => {
  const {
    askToAddRace,
    onSelectedRaceChange,
    onRaceEdit,
    onRaceDelete,
    selectedRace,
    racesList,
    inputOpen,
  } = props;

  return (
    <StyledGridRoot container direction="column" alignItems="flex-end">
      <Grid item xs>
        <RacesList
          onSelectedRaceChange={onSelectedRaceChange}
          onRaceEdit={onRaceEdit}
          onRaceDelete={onRaceDelete}
          selectedRace={selectedRace}
          racesList={racesList}
        />
      </Grid>
      <StyledGridItem item xs>
        <IconButton onClick={askToAddRace}>
          {inputOpen ? <Close /> : <Add />}
        </IconButton>
      </StyledGridItem>
    </StyledGridRoot>
  );
};

export default RacesListTemplate;
