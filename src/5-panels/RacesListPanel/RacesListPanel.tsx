//********** Imports **********//
import { Props } from "./RacesListPanel.types";
import { StyledListCard, StyledInputCard, StyledCardContent } from "./RacesListPanel.slots";
import { Fade } from "@mui/material";
import RacesListTemplate from "../../4-templates/RacesListTemplate";
import { Race } from "../../3-organisms/RaceInput/RaceInput.types";
import RaceInput from "../../3-organisms/RaceInput";
import { useState } from "react";

//********** Component **********//
const MainBarPanel = (props: Props) => {

  const [openRaceInputPanel, setOpenRaceInputPanel] = useState<boolean>(false);
  // Using the storybook, the component need data to display coherent HMI. 
  // TODO: When the backend will be connected through API, this component will use the redux store to get its data.
  const temporaryList:Race[]=[
    {id: "0001", name:"Course 10km", description:"Course chronométrée de 10"},
    {id: "0002", name:"Course 6km", description:"Course libre"},
    {id: "0003", name:"Course 4km", description:""},
    {id: "0004", name:"Randonnée 10km", description:""},
    {id: "0005", name:"Randonnée 6km", description:""},
  ];

  return (
    <>
      <StyledListCard>
        <StyledCardContent>
          <RacesListTemplate 
            askToAddRace={()=>{
              setOpenRaceInputPanel(!openRaceInputPanel);
              }}
            onSelectedRaceChange={()=>{}}
            onRaceDelete={()=>{}}
            onRaceEdit={()=>{}}
            selectedRace={temporaryList[1]}
            racesList={temporaryList}
            inputOpen={openRaceInputPanel}
          />
        </StyledCardContent>
      </StyledListCard>
      <Fade in={openRaceInputPanel}>
        <StyledInputCard>
          <StyledCardContent>
            <RaceInput 
              onRaceBlur={()=>{}}
              onRaceChange={()=>{}}
              race={{}as Race}
              onAddPoint={()=>{}}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
    </>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
