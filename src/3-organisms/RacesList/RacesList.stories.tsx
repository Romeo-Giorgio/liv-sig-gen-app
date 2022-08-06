//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesList from "./RacesList";
import { useState } from "react";
import { randomId } from "../../const";
import { Race } from "../../services/types";

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
    color: "#0000FF",
  },
  {
    id: randomId(10),
    name: "Course 6km",
    description: "Course libre",
    color: "#0000FF",
  },
  {
    id: randomId(10),
    name: "Course 4km",
    description: "",
    color: "#0000FF",
  },
  {
    id: randomId(10),
    name: "Randonnée 10km",
    description: "",
    color: "#0000FF",
  },
  {
    id: randomId(10),
    name: "Randonnée 6km",
    description: "",
    color: "#0000FF",
  },
];

export const DefaultStory = () => {
  const [racesList, setRacesList] = useState<Race[]>(list);
  const [currentRace, setCurrentRace] = useState<Race | undefined>({
    id: randomId(10),
    name: "Course 10km",
    description: "Course chronométrée de 10",
    color: "#0000FF",
  });

  return (
    <RacesList
      selectedRaceId={currentRace?.id}
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
