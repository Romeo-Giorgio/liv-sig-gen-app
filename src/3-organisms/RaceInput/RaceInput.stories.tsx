//********** Import **********//
import { action } from "@storybook/addon-actions";
import RaceInput from "./RaceInput";
import { Race } from "./RaceInput.types";
import { useState } from "react";

//********** Stories **********//
export default {
  component: RaceInput,
  title: "3-organisms/RaceInput",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

export const DefaultStory = () => {
  const [currentRace, setCurrentRace]=useState<Race>(
    {id: "0000", name:"Course 12km", description:"Course de 12km libre"}
  );
  return (
    <RaceInput 
      race={currentRace} 
      onRaceChange={(v:Race|undefined)=>{
        if(v!=null){
          setCurrentRace(v);
          action("onRaceChange")(v);
        }
      }}
      onRaceBlur={(v:Race|undefined)=>{
        action("onRaceBlur")(v);
      }}
      onAddPoint={()=>{
        action("onAddPoint")(currentRace);
      }}
      />
  );
};
DefaultStory.storyName = "Default";