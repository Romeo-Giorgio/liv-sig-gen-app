//********** Imports **********//
import { Props } from "./RaceInput.types";
import { Button, Grid, hexToRgb, Input, InputLabel } from "@mui/material";
import { SpacedGrid, StyledTextareaAutosize } from "./RaceInput.slots";
import { MapUtils, Race } from "../../services/types";
import { useContext } from "react";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { Color, HuePicker } from "react-color";

//********** Types **********//
interface RGBColor {
  r: number;
  g: number;
  b: number;
}

//********** Component **********//
const RaceInput = (props: Props) => {
  const { onRaceSave } = props;
  const { setSelectedRace, selectedRace } = useContext(
    MapUtilsContext
  ) as MapUtils;

  return (
    <Grid container alignItems="flex-start" direction="column">
      <Grid item xs>
        <InputLabel>Nom</InputLabel>
        <Input
          value={selectedRace?.name}
          onChange={(e) => {
            setSelectedRace({
              ...selectedRace,
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
          value={selectedRace?.description}
          onChange={(e) => {
            setSelectedRace({
              ...selectedRace,
              description: e.target.value,
            } as Race);
          }}
        />
      </SpacedGrid>
      <SpacedGrid item xs>
        <HuePicker
          width="180px"
          color={selectedRace?.color ?? "#000"}
          onChange={(c, e) => {
            if (selectedRace !== undefined) {
              setSelectedRace({ ...selectedRace, color: c.hex.toString() });
            }
          }}
        />
      </SpacedGrid>
      <SpacedGrid item xs>
        <Button onClick={onRaceSave}>Enregistrer</Button>
      </SpacedGrid>
    </Grid>
  );
};

export default RaceInput;
