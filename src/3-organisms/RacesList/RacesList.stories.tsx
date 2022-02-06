//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesList from "./RacesList";
import { useState } from "react";
import { Race } from "../RaceInput/types";

//********** Stories **********//
export default {
  component: RacesList,
  title: "3-organisms/RacesList",
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
    {id: "0001", name:"Course 10km", description:"Course chronométrée de 10"},
  );

  return (
    <RacesList 
      selectedRace={currentRace}
      racesList={racesList}
      onSelectedRaceChange={(v)=>{
        setCurrentRace(v);
        action("onSelectedRaceChange")(v);
      }}
      onRaceEdit={(raceId:string)=>{
        action("onRaceEdit")(raceId);
      }}
      onRaceDelete={(raceId:string)=>{
        setRacesList(racesList.filter(s=>s.id !== raceId));
        action("onRaceDeleteCallback")(raceId);
      }}
    />
  );
};
DefaultStory.storyName = "Default";