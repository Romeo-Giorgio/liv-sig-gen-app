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
    />
  );
};
DefaultStory.storyName = "Default";
