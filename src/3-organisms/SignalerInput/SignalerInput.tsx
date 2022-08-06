//********** Imports **********//
import { Props } from "./SignalerInput.types";
import {
  Button,
  Checkbox,
  Grid,
  Input,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { StyledGrid, StyledSelect } from "./SignalerInput.slots";
import { MapUtils, Signaler } from "../../services/types";
import { useContext } from "react";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";

//********** Component **********//
const SignalerInput = (props: Props) => {
  const { signalersList, onSignalerSave } = props;
  const { setSelectedSignaler, selectedSignaler } = useContext(
    MapUtilsContext
  ) as MapUtils;

  return (
    <Grid container direction="column">
      <Grid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Nom</InputLabel>
          <Input
            value={selectedSignaler?.lastName}
            onChange={(e) => {
              setSelectedSignaler({
                ...selectedSignaler,
                lastName: e.target.value,
              } as Signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Téléphone</InputLabel>
          <Input
            value={selectedSignaler?.phone}
            onChange={(e) => {
              setSelectedSignaler({
                ...selectedSignaler,
                phone: e.target.value,
              } as Signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Référent</InputLabel>
          <StyledSelect
            value={
              selectedSignaler?.referent != null
                ? selectedSignaler?.referent
                : ""
            }
            onChange={(e, v) => {
              setSelectedSignaler({
                ...selectedSignaler,
                referent: e.target.value,
              } as Signaler);
            }}
          >
            <MenuItem value="">
              <em> </em>
            </MenuItem>
            {signalersList?.map((k, i) => (
              <MenuItem value={k.id} key={`menuItem-${k.id}`}>
                <em>{`${k.firstName} ${k.lastName}`}</em>
              </MenuItem>
            ))}
          </StyledSelect>
        </Grid>
      </Grid>
      <StyledGrid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Prénom</InputLabel>
          <Input
            required
            value={selectedSignaler?.firstName}
            onChange={(e) => {
              setSelectedSignaler({
                ...selectedSignaler,
                firstName: e.target.value,
              } as Signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Mail</InputLabel>
          <Input
            value={selectedSignaler?.mail}
            onChange={(e) => {
              setSelectedSignaler({
                ...selectedSignaler,
                mail: e.target.value,
              } as Signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Permis</InputLabel>
          <Checkbox
            checked={selectedSignaler?.drivingLicence}
            onChange={(e) => {
              setSelectedSignaler({
                ...selectedSignaler,
                drivingLicence: e.target.checked,
              } as Signaler);
            }}
          />
          <Button onClick={onSignalerSave}>Enregistrer</Button>
        </Grid>
      </StyledGrid>
    </Grid>
  );
};

export default SignalerInput;
