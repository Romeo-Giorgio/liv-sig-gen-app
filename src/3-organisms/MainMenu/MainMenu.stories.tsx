import { useState } from "react";
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
      <MainMenu/>
    );
  };
  DefaultStory.storyName = "Default";