//********** Import **********//
import ObjectID from "bson-objectid";
import { Race } from "../../3-organisms/RaceInput/RaceInput.types";
import RacesListPanel from "./RacesListPanel";

//********** Stories **********//
export default {
  component: RacesListPanel,
  title: "5-panels/RacesListPanel",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
// Using the storybook, the component need data to display coherent HMI.
// TODO: When the backend will be connected through API, this component will use the redux store to get its data.
const temporaryList: Race[] = [
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
  return (
    <></>
    // <RacesListPanel  selectedRace={temporaryList[1]}/>
  );
};
DefaultStory.storyName = "Default";
