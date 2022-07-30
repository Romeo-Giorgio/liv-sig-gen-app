//********** Imports **********//
import { Props } from "./SignalerInput.types";
import { Grid, Input, InputLabel, MenuItem } from "@mui/material";
import { StyledGrid, StyledSelect } from "./SignalerInput.slots";
import { Signaler } from "../../services/types";

//********** Component **********//
const SignalerInput = (props: Props) => {
  const { signaler, signalersList, onSignalerBlur, onSignalerChange } = props;

  return (
    <Grid container direction="column">
      <Grid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Nom</InputLabel>
          <Input
            value={signaler?.lastName}
            onChange={(e) => {
              onSignalerChange({
                ...signaler,
                lastName: e.target.value,
              } as Signaler);
            }}
            onBlur={() => {
              if (onSignalerBlur) onSignalerBlur(signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Téléphone</InputLabel>
          <Input
            value={signaler?.phone}
            onChange={(e) => {
              onSignalerChange({
                ...signaler,
                phone: e.target.value,
              } as Signaler);
            }}
            onBlur={() => {
              if (onSignalerBlur) onSignalerBlur(signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Référent</InputLabel>
          <StyledSelect
            value={signaler?.referent != null ? signaler?.referent : ""}
            onChange={(e, v) => {
              onSignalerChange({
                ...signaler,
                referrer: e.target.value,
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
            value={signaler?.firstName}
            onChange={(e) => {
              onSignalerChange({
                ...signaler,
                firstName: e.target.value,
              } as Signaler);
            }}
            onBlur={() => {
              if (onSignalerBlur) onSignalerBlur(signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Mail</InputLabel>
          <Input
            value={signaler?.mail}
            onChange={(e) => {
              onSignalerChange({
                ...signaler,
                mail: e.target.value,
              } as Signaler);
            }}
            onBlur={() => {
              if (onSignalerBlur) onSignalerBlur(signaler);
            }}
          />
        </Grid>
      </StyledGrid>
    </Grid>
  );
};

export default SignalerInput;
