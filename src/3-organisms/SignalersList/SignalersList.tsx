//********** Imports **********//
import { Props } from "./SignalersList.types";
import {
  StyledBox,
  StyledList,
  StyledListItem,
  StyledListItemIcon,
  StyledListItemText,
} from "./SignalersList.slots";
import { Delete, Edit } from "@mui/icons-material";
import { useContext } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MainMenuUtils } from "../../services/types";

//********** Component **********//
const SignalersList = (props: Props) => {
  const {
    selectedSignaler,
    signalersList,
    onSelectedSignalerChange,
    onSignalerEdit,
    onSignalerDelete,
  } = props;
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;

  return (
    <StyledBox>
      <StyledList>
        {signalersList?.map((signaler) => (
          <StyledListItem
            key={signaler.id}
            selected={signaler.id === selectedSignaler?.id ?? false}
            onClick={(e) => {
              onSelectedSignalerChange(signaler);
            }}
          >
            <StyledListItemText
              primary={signaler.lastName}
              secondary={signaler.firstName}
            />
            {mode === "signaler" && (
              <StyledListItemIcon
                onClick={(e) => {
                  onSignalerEdit(signaler.id);
                  e.stopPropagation();
                }}
              >
                <Edit />
              </StyledListItemIcon>
            )}
            {mode === "signaler" && (
              <StyledListItemIcon
                onClick={(e) => {
                  onSignalerDelete(signaler.id);
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

export default SignalersList;
