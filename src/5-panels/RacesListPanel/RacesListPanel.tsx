//********** Imports **********//
import { Props } from "./RacesListPanel.types";
import {
  StyledListCard,
  StyledInputCard,
  StyledCardContent,
} from "./RacesListPanel.slots";
import { Fade } from "@mui/material";
import RacesListTemplate from "../../4-templates/RacesListTemplate";
import { Race } from "../../3-organisms/RaceInput/RaceInput.types";
import RaceInput from "../../3-organisms/RaceInput";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../../store";
import {
  createRace,
  getRacesList,
  racesAdapter,
} from "../../slices/racesSlices";
import { randomId } from "../../const";

//********** Component **********//
const MainBarPanel = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRacesList());
  }, [dispatch]);

  const [openRaceInputPanel, setOpenRaceInputPanel] = useState<boolean>(false);
  const [raceInput, setRaceInput] = useState<Race>();

  const racesList = useSelector((state) =>
    racesAdapter.getSelectors().selectAll(state.races)
  );

  const createNewRace = () => {
    if (raceInput != null) {
      dispatch(
        createRace({
          id: randomId(10),
          name: raceInput.name,
          description: raceInput.description,
        } as Race)
      );
    }
  };
  return (
    <>
      <StyledListCard>
        <StyledCardContent>
          <RacesListTemplate
            askToAddRace={() => {
              setOpenRaceInputPanel(!openRaceInputPanel);
            }}
            onSelectedRaceChange={() => {}}
            onRaceDelete={() => {}}
            onRaceEdit={() => {}}
            racesList={racesList}
            inputOpen={openRaceInputPanel}
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
