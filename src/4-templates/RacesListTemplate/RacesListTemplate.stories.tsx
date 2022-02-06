//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesListTemplate from "./RacesListTemplate";
import { useState } from "react";
import { Race } from "../../3-organisms/RaceInput/types";

//********** Stories **********//
export default {
  component: RacesListTemplate,
  title: "4-templates/RacesListTemplate",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
  
const list:Race[]=[
  {id: "0001", name:"Course 10km", description:"Course chronométrée de 10"},
  {id: "0002", name:"Course 6km", description:"Course libre"},
  {id: "0003", name:"Course 4km", description:""},
  {id: "0004", name:"Randonnée 10km", description:""},
  {id: "0005", name:"Randonnée 6km", description:""},
];

export const DefaultStory = () => {
  const [racesList, setRacesList] = useState<Race[]>(list);
  const [currentRace, setCurrentRace]=useState<Race|undefined>(
    {id: "0000", name:"Course 12km", description:"Course de 12km libre"}
  );

  return (
    <RacesListTemplate 
      selectedRace={currentRace}
      racesList={racesList}
      onSelectedRaceChange={(v)=>{
        setCurrentRace(v);
        action("onSelectedRaceChange")(v);
      }}
      onRaceDelete={(raceId:string)=>{
        setRacesList(racesList.filter(s=>s.id !== raceId));
        action("onRaceDeleteCallback")(raceId);
      }}
      onRaceEdit={(raceId:string)=>{
        action("onRaceEdit")(raceId);
      }}
      askToAddRace={()=>{
        action("askToAddRace")();
      }}
    />
  );
};
DefaultStory.storyName = "Default";