//********** Imports **********//
import { Props, Race } from "./types";
import {
  Button,
  Grid,
    Input,
    InputLabel,
    TextareaAutosize,
    withStyles 
  } from "@material-ui/core";
import styles, {  spacedItemClasses, textAreaClasses } from "./styles";

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
      <Grid item xs className={spacedItemClasses(props)}>
        <InputLabel >Description</InputLabel>
            <TextareaAutosize
              className={textAreaClasses(props)} 
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
      </Grid>
      <Grid item xs className={spacedItemClasses(props)}>
        <Button variant="outlined" onClick={onAddPoint}>Ajouter un point</Button>
      </Grid>
    </Grid>
  );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "SignalerInput",
  })(SignalerInput);