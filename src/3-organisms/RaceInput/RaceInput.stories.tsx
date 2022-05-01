//********** Import **********//
import { action } from "@storybook/addon-actions";
import RaceInput from "./RaceInput";
import { Race } from "./RaceInput.types";
import { useState } from "react";
import ObjectID from "bson-objectid";

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
    _id: ObjectID("6261cb693a07cf594f3413d8"),
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
