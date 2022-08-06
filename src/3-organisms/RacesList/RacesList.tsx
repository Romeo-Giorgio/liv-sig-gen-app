//********** Imports **********//
import { Props } from "./RacesList.types";
import {
  StyledBox,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "./RacesList.slots";
import { Delete, Edit } from "@mui/icons-material";
import ObjectId from "bson-objectid";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { useContext } from "react";
import { MainMenuUtils } from "../../services/types";

//********** Component **********//
const RacesList = (props: Props) => {
  const {
    selectedRaceId,
    racesList,
    onSelectedRaceChange,
    onRaceEdit,
    onRaceDelete,
  } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;

  return (
    <StyledBox>
      <StyledList>
        {racesList?.map((race, index) => (
          <StyledListItem
            key={index}
            selected={race.id === selectedRaceId ?? false}
            onClick={(e) => {
              onSelectedRaceChange(race);
            }}
          >
            <StyledListItemText
              primary={race?.name}
              secondary={race?.description}
            />
            {mode === "race" && (
              <StyledListItemIcon
                onClick={(e) => {
                  onRaceEdit(race.id);
                  e.stopPropagation();
                }}
              >
                <Edit />
              </StyledListItemIcon>
            )}
            {mode === "race" && (
              <StyledListItemIcon
                onClick={(e) => {
                  onRaceDelete(race.id);
                  e.stopPropagation();
                }}
              >
                <Delete />
              </StyledListItemIcon>
            )}
          </StyledListItem>
        ))}
      </StyledList>
    </StyledBox>
  );
};

export default RacesList;
