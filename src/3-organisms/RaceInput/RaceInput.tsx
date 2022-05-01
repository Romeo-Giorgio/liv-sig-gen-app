//********** Imports **********//
import { Props, Race } from "./RaceInput.types";
import { Button, Grid, Input, InputLabel } from "@mui/material";
import { SpacedGrid, StyledTextareaAutosize } from "./RaceInput.slots";
import { useDispatch, useSelector } from "../../store";
import { createRace, racesAdapter } from "../../slices/racesSlices";

//********** Component **********//
const RaceInput = (props: Props) => {
  const { race, onCreateRace, onRaceChange, onAddPoint } = props;

  return (
    <Grid container alignItems="flex-start" direction="column">
      <Grid item xs>
        <InputLabel>Nom</InputLabel>
        <Input
          value={race?.name}
          onChange={(e) => {
            onRaceChange({
              ...race,
              name: e.target.value,
            } as Race);
          }}
        />
      </Grid>
      <SpacedGrid item xs>
        <InputLabel>Description</InputLabel>
        <StyledTextareaAutosize
          minRows={5}
          maxRows={6}
          value={race?.description}
          onChange={(e) => {
            onRaceChange({
              ...race,
              description: e.target.value,
            } as Race);
          }}
        />
      </SpacedGrid>
      <SpacedGrid item xs>
        <Button variant="outlined" onClick={onAddPoint}>
          Ajouter un point
        </Button>
      </SpacedGrid>
      <SpacedGrid item xs>
        <Button onClick={onCreateRace}>Enregistrer</Button>
      </SpacedGrid>
    </Grid>
  );
};

export default RaceInput;
