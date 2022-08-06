//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesListTemplate from "./RacesListTemplate";
import { useState } from "react";
import { randomId } from "../../const";
import { Race } from "../../services/types";

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
  { id: randomId(10), name: "Course 4km", description: "", color: "#0000FF" },
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
    name: "Course 12km",
    description: "Course de 12km libre",
    color: "#0000FF",
  });

  return (
    <RacesListTemplate
      selectedRaceId={currentRace?.id ?? ""}
      racesList={racesList}
      onSelectedRaceChange={(v) => {
        setCurrentRace(v);
        action("onSelectedRaceChange")(v);
      }}
      onRaceDelete={(raceId: string) => {
        action("onRaceDeleteCallback")(raceId);
      }}
      onRaceEdit={(raceId: string) => {
        action("onRaceEdit")(raceId);
      }}
      askToAddRace={() => {
        action("askToAddRace")();
      }}
    />
  );
};
DefaultStory.storyName = "Default";
