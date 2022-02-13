//********** Import **********//
import { action } from "@storybook/addon-actions";
import MainMenuPanel from "./MainMenuPanel";

//********** Stories **********//
export default {
    component: MainMenuPanel,
    title: "5-panels/MainMenuPanel",
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
      <MainMenuPanel 
        onIntersectionsButtonClick={action("onIntersectionsButtonClick")}
        onSignalersButtonClick={action("onSignalersButtonClick")}
        onRacesButtonClick={action("onRacesButtonClick")}
      />
    );
  };
  DefaultStory.storyName = "Default";