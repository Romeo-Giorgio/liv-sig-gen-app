//********** Import **********//
import SignalersListPanel from "./SignalersListPanel";

//********** Stories **********//
export default {
    component: SignalersListPanel,
    title: "5-panels/SignalersListPanel",
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
      <SignalersListPanel />
    );
  };
  DefaultStory.storyName = "Default";