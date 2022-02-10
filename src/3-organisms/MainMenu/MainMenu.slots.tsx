//********** Imports **********//
import AppBar, {AppBarProps} from "@mui/material/AppBar";
import Toolbar, {ToolbarProps} from "@mui/material/Toolbar";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

//********** Styles **********//
export const StyledAppBar = styled(AppBar)<AppBarProps>(({theme})=>({
    position:"relative",
    maxWidth: "150px",
    borderRadius: "50px",
    backgroundColor: theme.palette.background.paper,
}));
export const StyledToolbar = styled(Toolbar)<ToolbarProps>(({theme})=>({
    justifyContent:"center",
}));
interface StyledIconButtonProps extends IconButtonProps{
    selected?:boolean;
}
export const StyledIconButton = styled(IconButton, 
    {shouldForwardProp: (prop)=>prop!=="selected"
})<StyledIconButtonProps>(({selected, theme})=>({
    ...(selected &&{
        color: theme.palette.primary.main,
    }),
}));