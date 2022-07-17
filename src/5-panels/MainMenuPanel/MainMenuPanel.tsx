//********** Imports **********//
import MainMenu from "../../3-organisms/MainMenu/MainMenu";
import { Props } from "./MainMenuPanel.types";
import { StyledCard, StyledCardContent } from "./MainMenuPanel.slots";
import { Card, CardContent } from "@mui/material";

//********** Component **********//
const MainBarPanel = (props: Props) => {

  return (
    <StyledCard>
      <StyledCardContent>
        <MainMenu
          
        />
      </StyledCardContent>
    </StyledCard>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
