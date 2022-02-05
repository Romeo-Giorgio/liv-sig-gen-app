//********** Imports **********//
import { Props } from "./types";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles 
} from "@material-ui/core";
import styles, { boxClasses, itemClasses, itemIconClasses, itemTextClasses } from "./styles";
import { Delete, Edit } from "@material-ui/icons";

//********** Component **********//
const SignalersList = (props: Props) => {
  const {selectedSignaler, signalersList, onSelectedSignalerChange, onSignalerEdit, onSignalerDelete} = props;

  return (
    <Box className={boxClasses(props)}> 
      <List>
        {signalersList?.map((signaler)=>
          <ListItem 
            className={itemClasses(props)}
            selected={signaler.id===selectedSignaler?.id ?? false}
            button
            onClick={(e)=>{
              onSelectedSignalerChange(signaler);
            }}
          >
            <ListItemText 
              primary={`${signaler.firstName} ${signaler.lastName}`} 
              className={itemTextClasses(props)}
            />
            <ListItemIcon 
              className={itemIconClasses(props)}
              onClick={(e)=>{
                onSignalerEdit(signaler.id);
                e.stopPropagation();
              }}
            >
              <Edit />
            </ListItemIcon>
            <ListItemIcon 
              className={itemIconClasses(props)}
              onClick={(e)=>{
                onSignalerDelete(signaler.id);
                e.stopPropagation();
              }}
            >
              <Delete />
            </ListItemIcon>
          </ListItem>
        )}
      </List>  
    </Box>
  );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "SignalersList",
  })(SignalersList);