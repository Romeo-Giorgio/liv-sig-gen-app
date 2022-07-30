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
  return (
    <GMap
      races={[]}
      onMapClick={(e: any) => {}}
      onRacePointRightClick={(e: any, id: string) => {}}
      onRacePointMarkerDrop={(e: any, id: string) => {}}
      signalers={[]}
    />
  );
};
DefaultStory.storyName = "Default";
