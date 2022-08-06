//********** Imports **********//
import { Props } from "./RacesListTemplate.types";
import { Grid, IconButton } from "@mui/material";
import { StyledGridItem, StyledGridRoot } from "./RacesListTemplate.slots";
import RacesList from "../../3-organisms/RacesList";
import { Add, Close } from "@mui/icons-material";
import { useContext } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MainMenuUtils } from "../../services/types";

//********** Component **********//
const RacesListTemplate = (props: Props) => {
  const {
    askToAddRace,
    onSelectedRaceChange,
    onRaceEdit,
    onRaceDelete,
    selectedRaceId,
    racesList,
    inputOpen,
  } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;

  return (
    <StyledGridRoot container direction="column" alignItems="flex-end">
      <Grid item xs>
        <RacesList
          onSelectedRaceChange={onSelectedRaceChange}
          onRaceEdit={onRaceEdit}
          onRaceDelete={onRaceDelete}
          selectedRaceId={selectedRaceId}
          racesList={racesList}
        />
      </Grid>
      {mode === "race" && (
        <StyledGridItem item xs>
          <IconButton onClick={askToAddRace}>
            {inputOpen ? <Close /> : <Add />}
          </IconButton>
        </StyledGridItem>
      )}
    </StyledGridRoot>
  );
};

export default RacesListTemplate;
