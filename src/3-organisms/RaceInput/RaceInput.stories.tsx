//********** Import **********//
import { action } from "@storybook/addon-actions";
import RaceInput from "./RaceInput";
import { Race } from "./RaceInput.types";
import { useState } from "react";
import { randomId } from "../../const";

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
  });
  return (
    <RaceInput
      race={currentRace}
      onRaceChange={(v: Race | undefined) => {
        if (v != null) {
          setCurrentRace(v);
          action("onRaceChange")(v);
        }
      }}
      onAddPoint={() => {
        action("onAddPoint")(currentRace);
      }}
      onCreateRace={() => {
        action("onCreateRace")(currentRace);
      }}
    />
  );
};
DefaultStory.storyName = "Default";
