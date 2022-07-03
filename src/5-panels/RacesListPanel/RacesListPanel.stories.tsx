//********** Import **********//
import { Race } from "../../3-organisms/RaceInput/RaceInput.types";
import { randomId } from "../../const";
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
  return (
    <></>
    // <RacesListPanel  selectedRace={temporaryList[1]}/>
  );
};
DefaultStory.storyName = "Default";
