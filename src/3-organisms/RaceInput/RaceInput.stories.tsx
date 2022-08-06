//********** Import **********//
import { action } from "@storybook/addon-actions";
import RaceInput from "./RaceInput";
import { useState } from "react";
import { randomId } from "../../const";
import { Race } from "../../services/types";

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
  const [currentRace, setCurrentRace] = useState<Race>({
    id: randomId(10),
    name: "Course 12km",
    description: "Course de 12km libre",
    color: "#0000FF",
  });
  return (
    <RaceInput
      race={currentRace}
      onAddPoint={() => {
        action("onAddPoint")(currentRace);
      }}
      onRaceSave={() => {
        action("onRaceSave")(currentRace);
      }}
    />
  );
};
DefaultStory.storyName = "Default";
