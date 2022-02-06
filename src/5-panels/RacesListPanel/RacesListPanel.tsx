//********** Imports **********//
import Panel from "../Panel";
import { Props, StylesProps } from "./types";
import styles, { panelClasses } from "./styles";
import { Fade, withStyles } from "@material-ui/core";
import RacesListTemplate from "../../4-templates/RacesListTemplate";
import { Race } from "../../3-organisms/RaceInput/types";
import RaceInput from "../../3-organisms/RaceInput";
import { useState } from "react";

//********** Component **********//
const MainBarPanel = (p: Props) => {
  const props = p as StylesProps;

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
      <Panel hasHeader={false} className={panelClasses(props, "list")}>
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
      </Panel>
      <Fade in={openRaceInputPanel}>
        <Panel hasHeader={false} className={panelClasses(props, "input")}>
          <RaceInput 
            onRaceBlur={()=>{}}
            onRaceChange={()=>{}}
            race={{}as Race}
          />
        </Panel>
      </Fade>
    </>
    
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default withStyles<"root", { name: string }, Props>(styles, {
  name: "MainBarPanel",
})(MainBarPanel);
