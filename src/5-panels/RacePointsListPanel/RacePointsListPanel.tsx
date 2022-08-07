//********** Imports **********//
import { StyledListCard, StyledCardContent } from "./RacePointsListPanel.slots";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "../../store";

import { MainMenuUtils, MapUtils, RacePoint } from "../../services/types";
import RacePointsListTemplate from "../../4-templates/RacePointsListTemplate";
import {
  deleteRacePointById,
  racePointAdapter,
} from "../../slices/racePointSlice";
import { Fade } from "@mui/material";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";

//********** Component **********//
const RacePointsListPanel = () => {
  const [selectedRacePoint, setSelectedRacePoint] =
    useState<number | undefined>();
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;
  const { selectedRace } = useContext(MapUtilsContext) as MapUtils;
  const racePoints = useSelector((state) =>
    racePointAdapter.getSelectors().selectAll(state.racePoints)
  );
  const dispatch = useDispatch();

  const onSelectedRacePointChange = (
    selectedRacePoint: RacePoint | undefined
  ) => {
    setSelectedRacePoint(selectedRacePoint?.id ?? undefined);
  };

  const onDeleteRacePointClick = (racePointId: number) => {
    dispatch(deleteRacePointById(racePointId.toString()));
  };
  return (
    <Fade in={mode === "intersection" && selectedRace != null} unmountOnExit>
      <StyledListCard>
        <StyledCardContent>
          <RacePointsListTemplate
            racePointsList={racePoints}
            onRacePointDelete={onDeleteRacePointClick}
            onSelectedRacePointChange={onSelectedRacePointChange}
            selectedRacePointId={selectedRacePoint}
          />
        </StyledCardContent>
      </StyledListCard>
    </Fade>
  );
};

RacePointsListPanel.displayName = "RacePointsListPanel";
export default RacePointsListPanel;
