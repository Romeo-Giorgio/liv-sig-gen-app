//********** Imports **********//
import { Props } from "./types";
import {
    AppBar , Toolbar,  Divider, IconButton, withStyles 
  } from "@material-ui/core";
import { People, Timeline ,Room } from "@material-ui/icons";
import styles, { iconClasses, menuClasses } from "./styles";
import { useState } from "react";

//********** Component **********//
const MainMenu = (props: Props) => {
    const {onIntersectionsButtonClick, onSignalersButtonClick, onTracksButtonClick } = props;
    const [mode, setMode] = useState<"track"|"intersection"|"signaler">("track");
    return (
        <AppBar position="static" className={menuClasses(props)}>
            <Toolbar>
                <IconButton 
                    className={iconClasses(props,  mode==="track")}
                    onClick={()=>{
                        setMode("track");
                        if(onTracksButtonClick)onTracksButtonClick();
                    }}>
                    <Timeline  />
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                />
                <IconButton 
                    className={iconClasses(props, mode==="intersection")}
                    onClick={()=>{
                        setMode("intersection");
                       if(onIntersectionsButtonClick)onIntersectionsButtonClick();
                    }}>
                    <Room/>
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                />
                <IconButton 
                    className={iconClasses(props, mode==="signaler")}
                    onClick={()=>{
                        setMode("signaler");
                        if(onSignalersButtonClick)onSignalersButtonClick();
                    }}>
                    <People />
                </IconButton>
            </Toolbar>
        </AppBar>
      );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "MainMenu",
  })(MainMenu);