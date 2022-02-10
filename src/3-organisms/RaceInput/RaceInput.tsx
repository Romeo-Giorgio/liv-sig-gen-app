//********** Imports **********//
import { Props, Race } from "./RaceInput.types";
import {
  Button,
  Grid,
    Input,
    InputLabel,
  } from "@mui/material";
import { SpacedGrid, StyledTextareaAutosize } from "./RaceInput.slots";

//********** Component **********//
const SignalerInput = (props: Props) => {
  const {race, onRaceChange, onRaceBlur, onAddPoint } = props;

  return (
    <Grid container alignItems="flex-start" direction="column">
      <Grid item xs>
        <InputLabel>Nom</InputLabel>
            <Input 
              value={race?.name}
              onChange={(e)=>{
                onRaceChange({
                  ...race,
                  name:e.target.value
                } as Race);
              }} 
              onBlur={()=>{
                if(onRaceBlur) onRaceBlur(race);
              }}
            />
      </Grid>
      <SpacedGrid item xs >
        <InputLabel >Description</InputLabel>
            <StyledTextareaAutosize
              minRows={5}
              maxRows={6}
              value={race?.description}
              onChange={(e)=>{
                onRaceChange({
                  ...race,
                  description:e.target.value
                } as Race);
              }} 
              onBlur={()=>{
                if(onRaceBlur) onRaceBlur(race);
              }}
            />
      </SpacedGrid>
      <SpacedGrid item xs >
        <Button variant="outlined" onClick={onAddPoint}>Ajouter un point</Button>
      </SpacedGrid>
    </Grid>
  );
};

export default SignalerInput;