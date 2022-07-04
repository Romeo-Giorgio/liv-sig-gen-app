//********** Imports **********//
import {
  StyledListCard,
  StyledInputCard,
  StyledCardContent,
} from "./RacesListPanel.slots";
import { Fade } from "@mui/material";
import RacesListTemplate from "../../4-templates/RacesListTemplate";
import { Race } from "../../3-organisms/RaceInput/RaceInput.types";
import RaceInput from "../../3-organisms/RaceInput";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import {
  createRace,
  deleteRace,
  getRacesList,
  racesAdapter,
} from "../../slices/raceSlices";
import { randomId } from "../../const";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { MapUtils } from "../../services/types";
import { deleteRacePointByRaceId } from "../../slices/racePointSlice";

//********** Component **********//
const MainBarPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRacesList());
  }, [dispatch]);

  const [openRaceInputPanel, setOpenRaceInputPanel] = useState<boolean>(false);
  const [raceInput, setRaceInput] = useState<Race>();
  const { setSelectedRaceId, selectedRaceId, newRaceId, setNewRaceId } =
    useContext(MapUtilsContext) as MapUtils;
  const racesList = useSelector((state) =>
    racesAdapter.getSelectors().selectAll(state.races)
  );

  const createNewRace = () => {
    if (raceInput != null) {
      dispatch(
        createRace({
          id: newRaceId,
          name: raceInput.name,
          description: raceInput.description,
        } as Race)
      );
    }
  };

  const onSelectedRaceChange = (selectedRace: Race | undefined) => {
    setSelectedRaceId(selectedRace?.id ?? "");
  };

  const onDeleteRaceClick = (raceId: string) => {
    dispatch(deleteRacePointByRaceId(raceId));
    dispatch(deleteRace(raceId));
  };
  return (
    <>
      <StyledListCard>
        <StyledCardContent>
          <RacesListTemplate
            askToAddRace={() => {
              setOpenRaceInputPanel(!openRaceInputPanel);
              setNewRaceId(randomId(10));
            }}
            onSelectedRaceChange={onSelectedRaceChange}
            onRaceDelete={onDeleteRaceClick}
            onRaceEdit={() => {}}
            racesList={racesList}
            inputOpen={openRaceInputPanel}
            selectedRaceId={selectedRaceId}
          />
        </StyledCardContent>
      </StyledListCard>
      <Fade in={openRaceInputPanel}>
        <StyledInputCard>
          <StyledCardContent>
            <RaceInput
              race={raceInput}
              onRaceChange={(v?: Race) => {
                setRaceInput(v);
              }}
              onAddPoint={() => {}}
              onCreateRace={() => {
                createNewRace();
              }}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
    </>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
