//********** Imports **********//
import { Props } from "./MainMenu.types";
import { Divider} from "@mui/material";
import { People, Timeline ,Room } from "@mui/icons-material";
import { useState } from "react";
import { StyledAppBar, StyledToolbar, StyledIconButton } from "./MainMenu.slots";

//********** Component **********//
const MainMenu = (props: Props) => {
    const {onIntersectionsButtonClick, onSignalersButtonClick, onTracksButtonClick } = props;
    const [mode, setMode] = useState<"race"|"intersection"|"signaler">("race");
    return (
        <StyledAppBar>
            <StyledToolbar>
                <StyledIconButton 
                    selected={mode==="race"}
                    onClick={()=>{
                        setMode("race");
                        if(onTracksButtonClick)onTracksButtonClick();
                    }}>
                    <Timeline  />
                </StyledIconButton>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />
                <StyledIconButton
                    selected={mode==="intersection"}
                    onClick={()=>{
                        setMode("intersection");
                       if(onIntersectionsButtonClick)onIntersectionsButtonClick();
                    }}>
                    <Room/>
                </StyledIconButton>
                <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                />
                <StyledIconButton 
                    selected={mode==="signaler"}
                    onClick={()=>{
                        setMode("signaler");
                        if(onSignalersButtonClick)onSignalersButtonClick();
                    }}>
                    <People />
                </StyledIconButton>
            </StyledToolbar>
        </StyledAppBar>
      );
};

export default MainMenu;