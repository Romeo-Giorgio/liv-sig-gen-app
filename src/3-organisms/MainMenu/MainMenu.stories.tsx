//********** Import **********//
import { action } from "@storybook/addon-actions";
import MainMenu from "./MainMenu";

//********** Stories **********//
export default {
    component: MainMenu,
    title: "3-organisms/MainMenu",
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
      <MainMenu
        onIntersectionsButtonClick={action("onIntersectionsButtonClick")}
        onSignalersButtonClick={action("onSignalersButtonClick")}
        onTracksButtonClick={action("onTracksButtonClick")}
      />
    );
  };
  DefaultStory.storyName = "Default";