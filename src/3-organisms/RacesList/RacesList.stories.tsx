//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesList from "./RacesList";
import { useState } from "react";
import { Race } from "../RaceInput/RaceInput.types";
import { randomId } from "../../const";

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

const list: Race[] = [
  {
    id: randomId(10),
    name: "Course 10km",
    description: "Course chronométrée de 10",
  },
  {
    id: randomId(10),
    name: "Course 6km",
    description: "Course libre",
  },
  {
    id: randomId(10),
    name: "Course 4km",
    description: "",
  },
  {
    id: randomId(10),
    name: "Randonnée 10km",
    description: "",
  },
  {
    id: randomId(10),
    name: "Randonnée 6km",
    description: "",
  },
];

export const DefaultStory = () => {
  const [racesList, setRacesList] = useState<Race[]>(list);
  const [currentRace, setCurrentRace] = useState<Race | undefined>({
    id: randomId(10),
    name: "Course 10km",
    description: "Course chronométrée de 10",
  });

  return (
    <RacesList
      selectedRace={currentRace}
      racesList={racesList}
      onSelectedRaceChange={(v) => {
        setCurrentRace(v);
        action("onSelectedRaceChange")(v);
      }}
      onRaceEdit={(raceId: string) => {
        action("onRaceEdit")(raceId);
      }}
      onRaceDelete={(raceId: string) => {
        action("onRaceDeleteCallback")(raceId);
      }}
    />
  );
};
DefaultStory.storyName = "Default";
