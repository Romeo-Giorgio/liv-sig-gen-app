//********** Imports **********//
import Panel from "../Panel";
import MainMenu from "../../3-organisms/MainMenu/MainMenu";
import { Props, StylesProps } from "./types";
import styles, { panelClasses } from "./styles";
import { withStyles } from "@material-ui/core";
//********** Component **********//
const MainBarPanel = (p: Props) => {
  const props = p as StylesProps;
  const { 
    onIntersectionsButtonClick, 
    onSignalersButtonClick, 
    onTracksButtonClick, 
  } = props;

  return (
    <Panel hasHeader={false} className={panelClasses(props)}>
      <MainMenu 
      onIntersectionsButtonClick={onIntersectionsButtonClick}
      onSignalersButtonClick={onSignalersButtonClick}  
      onTracksButtonClick={onTracksButtonClick}
      />
    </Panel>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default withStyles<"root", { name: string }, Props>(styles, {
  name: "MainBarPanel",
})(MainBarPanel);
