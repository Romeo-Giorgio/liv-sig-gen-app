//********** Imports **********//
import { Props } from "./types";
import {
    AppBar , Toolbar,  Divider, IconButton, withStyles 
  } from "@material-ui/core";
import { People, Timeline ,Room } from "@material-ui/icons";
import styles, { menuClasses } from "./styles";

//********** Component **********//
const MainMenu = (props: Props) => {
    const {onIntersectionsButtonClick, onSignalersButtonClick, onTracksButtonClick} = props;
    return (
        <AppBar position="static" className={menuClasses(props)}>
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

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "MainMenu",
  })(MainMenu);