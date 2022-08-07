//********** Imports **********//
import {
  StyledListCard,
  StyledInputCard,
  StyledCardContent,
} from "./RacesListPanel.slots";
import { Fade } from "@mui/material";
import RacesListTemplate from "../../4-templates/RacesListTemplate";
import RaceInput from "../../3-organisms/RaceInput";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import {
  createRace,
  deleteRace,
  getRacesList,
  racesAdapter,
  updateRace,
} from "../../slices/raceSlice";
import { randomId } from "../../const";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { MainMenuUtils, MapUtils, Race } from "../../services/types";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";

//********** Component **********//
const RacesListPanel = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRacesList());
  }, [dispatch]);

  const [openRaceInputPanel, setOpenRaceInputPanel] = useState<boolean>(false);
  const [raceInput, setRaceInput] = useState<Race>();
  const { setSelectedRace, selectedRace } = useContext(
    MapUtilsContext
  ) as MapUtils;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;
  const races = useSelector((state) =>
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
    setSelectedRace(selectedRace);
  };

  const onDeleteRaceClick = (raceId: string) => {
    dispatch(deleteRace(raceId));
  };

  const onEditRaceClick = (raceId: string) => {
    setSelectedRace(races.find((race) => race.id === raceId));
    setOpenRaceInputPanel(true);
  };
  const onRaceSave = () => {
    if (
      races.map((race) => race.id).includes(selectedRace?.id!) &&
      selectedRace != null
    ) {
      dispatch(updateRace(selectedRace));
    } else if (selectedRace != null) {
      dispatch(createRace(selectedRace));
    }
  };
  return (
    <>
      <Fade in={mode !== "export"} unmountOnExit>
        <StyledListCard>
          <StyledCardContent>
            <RacesListTemplate
              askToAddRace={() => {
                setOpenRaceInputPanel(!openRaceInputPanel);
                setSelectedRace({
                  id: randomId(10),
                  color: "#000000",
                  name: "",
                  description: "",
                });
              }}
              onSelectedRaceChange={onSelectedRaceChange}
              onRaceDelete={onDeleteRaceClick}
              onRaceEdit={onEditRaceClick}
              racesList={races}
              inputOpen={openRaceInputPanel}
              selectedRaceId={selectedRace?.id}
            />
          </StyledCardContent>
        </StyledListCard>
      </Fade>

      <Fade in={openRaceInputPanel && mode === "race"}>
        <StyledInputCard>
          <StyledCardContent>
            <RaceInput
              race={raceInput}
              onAddPoint={() => {}}
              onRaceSave={onRaceSave}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
    </>
  );
};

RacesListPanel.displayName = "RacesListPanel";
export default RacesListPanel;
