//********** Imports **********//
import { Props } from "./SignalerExport.types";
import { Button, Grid, Input, InputLabel } from "@mui/material";
import { Evenement } from "../../services/types";
import { StyledTextareaAutosize } from "./SignalerExport.slots";

//********** Component **********//
const SignalerExport = (props: Props) => {
  const { evenement, saveEvenement, setEvenement } = props;
  console.log(evenement);

  return (
    <Grid container direction="column">
      <Grid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Evenement</InputLabel>
          <Input
            value={evenement?.eventLabel}
            onChange={(e) => {
              setEvenement({
                ...evenement,
                eventLabel: e.target.value,
              } as Evenement);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Date</InputLabel>
          <Input
            value={evenement?.dateLabel}
            onChange={(e) => {
              setEvenement({
                ...evenement,
                dateLabel: e.target.value,
              } as Evenement);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Vélo ouvreur/balais course</InputLabel>
          <Input
            value={evenement?.bikeLabel}
            onChange={(e) => {
              setEvenement({
                ...evenement,
                bikeLabel: e.target.value,
              } as Evenement);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Personne à contacter en cas de problème</InputLabel>
          <StyledTextareaAutosize
            minRows={5}
            maxRows={6}
            value={evenement?.issueLabel}
            onChange={(e) => {
              setEvenement({
                ...evenement,
                issueLabel: e.target.value,
              } as Evenement);
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row" justifyContent="flex-end">
        <Grid item>
          <Button onClick={saveEvenement}>Sauvegarder Informations</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => {}}>Générer PDF</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignalerExport;
