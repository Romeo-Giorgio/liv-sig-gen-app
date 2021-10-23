import { Props } from "./types";
import {
    AppBar , Toolbar,  Divider, IconButton 
  } from "@material-ui/core";
  import { Layers ,Menu } from "@material-ui/icons";
const MainMenu = (_: Props) => {
    return (
        <AppBar style={{
            borderRadius: "50px",
            width: "318px",
            backgroundColor: "Background",
            top:"4px",
            left: "calc(50% - 200px)",}}
            position="static">
            <Toolbar>
                <IconButton>
                    <Menu />
                </IconButton>
                <Divider
                    orientation="vertical"
                    variant="fullWidth"
                    flexItem
                />
                <IconButton>
                    <Layers />
                </IconButton>
            </Toolbar>
        </AppBar>
      );
};

export default MainMenu