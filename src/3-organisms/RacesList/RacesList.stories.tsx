//********** Import **********//
import { action } from "@storybook/addon-actions";
import RacesList from "./RacesList";
import { useState } from "react";
import { Race } from "../RaceInput/RaceInput.types";
import ObjectID from "bson-objectid";

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
    _id: ObjectID("6261cb693a07cf594f3413d8"),
    name: "Course 10km",
    description: "Course chronométrée de 10",
  },
  {
    _id: ObjectID("6261cb933a07cf594f3413da"),
    name: "Course 6km",
    description: "Course libre",
  },
  {
    _id: ObjectID("6261cbad3a07cf594f3413dc"),
    name: "Course 4km",
    description: "",
  },
  {
    _id: ObjectID("6261cbe8396d9b5d23e9f7ac"),
    name: "Randonnée 10km",
    description: "",
  },
  {
    _id: ObjectID("626eae6e5c1c5c43d748f5b6"),
    name: "Randonnée 6km",
    description: "",
  },
];

export const DefaultStory = () => {
  const [racesList, setRacesList] = useState<Race[]>(list);
  const [currentRace, setCurrentRace] = useState<Race | undefined>({
    _id: ObjectID("6261cb693a07cf594f3413d8"),
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
      onRaceEdit={(raceId: ObjectID) => {
        action("onRaceEdit")(raceId);
      }}
      onRaceDelete={(raceId: ObjectID) => {
        // setRacesList(
        //   racesList.filter(
        //     (s) =>
        //       ObjectID(s._id).toHexString() !== ObjectID(raceId).toHexString()
        //   )
        // );
        action("onRaceDeleteCallback")(raceId);
      }}
    />
  );
};
DefaultStory.storyName = "Default";
