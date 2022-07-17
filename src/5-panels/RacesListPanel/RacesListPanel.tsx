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
} from "../../slices/raceSlice";
import { randomId } from "../../const";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { MapUtils } from "../../services/types";

//********** Component **********//
const RacesListPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRacesList());
  }, [dispatch]);

  const [openRaceInputPanel, setOpenRaceInputPanel] = useState<boolean>(false);
  const [raceInput, setRaceInput] = useState<Race>();
  const { setSelectedRaceId, selectedRaceId } = useContext(
    MapUtilsContext
  ) as MapUtils;
  const racesList = useSelector((state) =>
    racesAdapter.getSelectors().selectAll(state.races)
  );

  const createNewRace = () => {
    if (raceInput != null) {
      dispatch(
        createRace({
          id: randomId(10),
          name: raceInput.name,
          description: raceInput.description ?? "",
        } as Race)
      );
    }
  };

  const onSelectedRaceChange = (selectedRace: Race | undefined) => {
    setSelectedRaceId(selectedRace?.id ?? "");
  };

  const onDeleteRaceClick = (raceId: string) => {
    dispatch(deleteRace(raceId));
  };
  return (
    <>
      <StyledListCard>
        <StyledCardContent>
          <RacesListTemplate
            askToAddRace={() => {
              setOpenRaceInputPanel(!openRaceInputPanel);
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
RacesListPanel.displayName = "RacesListPanel";

export default RacesListPanel;
