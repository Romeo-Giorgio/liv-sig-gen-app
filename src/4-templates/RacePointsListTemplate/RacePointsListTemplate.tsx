//********** Imports **********//
import { Props } from "./RacesListTemplate.types";
import { Grid, IconButton } from "@mui/material";
import { StyledGridItem, StyledGridRoot } from "./RacePointsListTemplate.slots";
import RacesList from "../../3-organisms/RacesList";
import { Add, Close } from "@mui/icons-material";
import RacePointsList from "../../3-organisms/RacePointsList";

//********** Component **********//
const RacePointsListTemplate = (props: Props) => {
  const {
    onRacePointDelete,
    onSelectedRacePointChange,
    racePointsList,
    selectedRacePointId,
  } = props;

  return (
    <StyledGridRoot container direction="column" alignItems="flex-end">
      <Grid item xs>
        <RacePointsList
          onRacePointDelete={onRacePointDelete}
          onSelectedRacePointChange={onSelectedRacePointChange}
          racePointsList={racePointsList}
          selectedRacePointId={selectedRacePointId}
        />
      </Grid>
    </StyledGridRoot>
  );
};

RacePointsListTemplate.displayName = "RacePointsListTemplate";
export default RacePointsListTemplate;
