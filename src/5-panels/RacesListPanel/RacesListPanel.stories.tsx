//********** Import **********//
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
  
  export const DefaultStory = () => {
    return (
      <RacesListPanel />
    );
  };
  DefaultStory.storyName = "Default";