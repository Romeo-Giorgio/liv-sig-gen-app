//********** Imports **********//
import Panel from "../Panel";
import MainMenu from "../../3-organisms/MainMenu/MainMenu";
import { Props } from "./types";

//********** Component **********//
const MainBarPanel = (props: Props) => {
  const { onIntersectionsButtonClick, onSignalersButtonClick, onTracksButtonClick } = props;

  return (
    <Panel hasHeader={false}>
      <MainMenu 
      onIntersectionsButtonClick={onIntersectionsButtonClick}
      onSignalersButtonClick={onSignalersButtonClick}  
      onTracksButtonClick={onTracksButtonClick}
      />
    </Panel>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
