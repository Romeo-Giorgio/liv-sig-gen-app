import { useState } from "react";
import GMap from "./GMap";

//********** Stories **********//
export default {
  component: GMap,
  title: "3-organisms/GMap",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

export const DefaultStory = () => {
  return <GMap />;
};
DefaultStory.storyName = "Default";
