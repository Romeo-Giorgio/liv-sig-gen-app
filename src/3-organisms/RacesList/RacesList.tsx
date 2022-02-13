//********** Imports **********//
import { Props } from "./RacesList.types";
import { StyledBox, StyledList, StyledListItem, StyledListItemIcon, StyledListItemText } from "./RacesList.slots";
import { Delete, Edit } from "@mui/icons-material";

//********** Component **********//
const RacesList = (props: Props) => {
  const {selectedRace, racesList, onSelectedRaceChange, onRaceEdit, onRaceDelete} = props;

  return (
    <StyledBox> 
      <StyledList>
        {racesList?.map((race)=>
          <StyledListItem 
            key={race.id}
            selected={race.id===selectedRace?.id ?? false}
            onClick={(e)=>{
              onSelectedRaceChange(race);
            }}
          >
            <StyledListItemText 
              primary={race?.name}
              secondary={race?.description}
            />
            <StyledListItemIcon 
              onClick={(e)=>{
                onRaceEdit(race.id);
                e.stopPropagation();
              }}
            >
              <Edit />
            </StyledListItemIcon>
            <StyledListItemIcon 
              onClick={(e)=>{
                onRaceDelete(race.id);
                e.stopPropagation();
              }}
            >
              <Delete />
            </StyledListItemIcon>
          </StyledListItem>
        )}
      </StyledList>  
    </StyledBox>
  );
};

export default RacesList;