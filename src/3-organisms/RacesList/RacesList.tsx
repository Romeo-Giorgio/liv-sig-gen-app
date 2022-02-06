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
const RacesList = (props: Props) => {
  const {selectedRace, racesList, onSelectedRaceChange, onRaceEdit, onRaceDelete} = props;

  return (
    <Box className={boxClasses(props)}> 
      <List>
        {racesList?.map((race)=>
          <ListItem 
            className={itemClasses(props)}
            selected={race.id===selectedRace?.id ?? false}
            button
            onClick={(e)=>{
              onSelectedRaceChange(race);
            }}
          >
            <ListItemText 
              primary={race?.name} 
              className={itemTextClasses(props)}
            />
            <ListItemIcon 
              className={itemIconClasses(props)}
              onClick={(e)=>{
                onRaceEdit(race.id);
                e.stopPropagation();
              }}
            >
              <Edit />
            </ListItemIcon>
            <ListItemIcon 
              className={itemIconClasses(props)}
              onClick={(e)=>{
                onRaceDelete(race.id);
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
    name: "RacesList",
  })(RacesList);