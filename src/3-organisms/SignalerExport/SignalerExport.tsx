//********** Imports **********//
import { Props } from "./SignalerExport.types";
import { Button, Grid, Input, InputLabel } from "@mui/material";
import { Evenement, MapUtils } from "../../services/types";
import { StyledTextareaAutosize } from "./SignalerExport.slots";
import { PDFDownloadLink } from "@react-pdf/renderer";
import LivSigPdf from "../../0-abstract/LivSigPdf";
import { useContext } from "react";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { useSelector } from "../../store";
import { signalerAdapter } from "../../slices/signalerSlice";

//********** Component **********//
const SignalerExport = (props: Props) => {
  const { evenement, saveEvenement, setEvenement } = props;

  const { selectedSignaler } = useContext(MapUtilsContext) as MapUtils;
  const signalers = useSelector((state) =>
    signalerAdapter.getSelectors().selectAll(state.signalers)
  );
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
          <PDFDownloadLink
            document={
              <LivSigPdf
                signaler={selectedSignaler!}
                evenement={evenement!}
                signalers={signalers}
              />
            }
            fileName={`${selectedSignaler?.lastName}_${selectedSignaler?.firstName}_livret_signaleur.pdf`}
          >
            {({ loading }) =>
              loading
                ? "Génération du livret..."
                : "Télécharger le livret en pdf"
            }
          </PDFDownloadLink>
        </Grid>
      </Grid>
    </Grid>
  );
};

SignalerExport.displayName = "SignalerExport";
export default SignalerExport;
