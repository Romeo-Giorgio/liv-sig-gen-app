//********** Imports **********//
import { Props } from "./RacePointsList.types";
import {
  StyledBox,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "./RacePointsList.slots";
import { Delete, Edit } from "@mui/icons-material";
import ObjectId from "bson-objectid";

//********** Component **********//
const RacePointsList = (props: Props) => {
  const {
    onRacePointDelete,
    onSelectedRacePointChange,
    racePointsList,
    selectedRacePointId,
  } = props;

  return (
    <StyledBox>
      <StyledList>
        {racePointsList?.map((racePoint, index) => (
          <StyledListItem
            key={index}
            selected={racePoint.id === selectedRacePointId ?? false}
            onClick={(e) => {
              onSelectedRacePointChange(racePoint);
            }}
          >
            <StyledListItemText primary={index + 1} />

            <StyledListItemIcon
              onClick={(e) => {
                onRacePointDelete(racePoint.id);
                e.stopPropagation();
              }}
            >
              <Delete />
            </StyledListItemIcon>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledBox>
  );
};

RacePointsList.displayName = "RacePointsList";
export default RacePointsList;
