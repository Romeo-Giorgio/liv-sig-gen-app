//********** Imports **********//
import { Props } from "./types";
import {
    AppBar , Toolbar,  Divider, IconButton 
  } from "@material-ui/core";
import { People, Timeline ,Room } from "@material-ui/icons";
import blueGrey from "@material-ui/core/colors/blueGrey";

//********** Component **********//
const MainMenu = (props: Props) => {
    const {onIntersectionsButtonClick, onSignalersButtonClick, onTracksButtonClick} = props;
    return (
        <AppBar style={{
            borderRadius: "50px",
            width: "200px",
            backgroundColor: blueGrey[100],
            top:"4px",
            left: "calc(50% - 200px)",}}
            position="static">
            <Toolbar>
                <IconButton
                onClick={onTracksButtonClick}>
                    <Timeline />
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                />
                <IconButton
                onClick={onIntersectionsButtonClick}>
                    <Room />
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                />
                <IconButton
                onClick={onSignalersButtonClick}>
                    <People />
                </IconButton>
            </Toolbar>
        </AppBar>
      );
};

export default MainMenu