//********** Imports **********//
import { Props, Signaler } from "./types";
import {
  Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    withStyles 
  } from "@material-ui/core";
import styles, { selectClasses, spacedRowClasses } from "./styles";

//********** Component **********//
const SignalerInput = (props: Props) => {
  const {signaler, signalersList, onSignalerBlur, onSignalerChange} = props;

  return (
    <Grid container direction="column">
      <Grid container spacing={2} direction="row">
        <Grid item>
          <InputLabel>Nom</InputLabel>
          <Input 
            value={signaler?.lastName}
            onChange={(e)=>{
              onSignalerChange({
                ...signaler,
                lastName:e.target.value
              } as Signaler);
            }} 
            onBlur={()=>{
              if(onSignalerBlur)
                onSignalerBlur(signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Téléphone</InputLabel>
          <Input 
            value={signaler?.phone}
            onChange={(e)=>{
              onSignalerChange({
                ...signaler,
                phone:e.target.value
              } as Signaler);
            }}
            onBlur={()=>{
              if(onSignalerBlur)
                onSignalerBlur(signaler);
            }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Référent</InputLabel>
          <Select 
            className={selectClasses(props)} 
            value={signaler?.referrer != null ?signaler?.referrer:""}
            onChange={(e,v)=>{
              onSignalerChange({
                ...signaler,
                referrer:e.target.value
              } as Signaler);
            }}
          >
          <MenuItem value="">
            <em> </em>
          </MenuItem>
          {signalersList?.map((k, i)=>(
            <MenuItem value={k.id}>
              <em>{`${k.firstName} ${k.lastName}`}</em>
            </MenuItem>
          ))}
          </Select>
        </Grid>
      </Grid>
      <Grid container spacing={2} direction="row" className={spacedRowClasses(props)}>
        <Grid item>
          <InputLabel>Prénom</InputLabel>
          <Input 
          value={signaler?.firstName}
          onChange={(e)=>{
            onSignalerChange({
              ...signaler,
              firstName:e.target.value
            } as Signaler);
          }}
          onBlur={()=>{
            if(onSignalerBlur)
              onSignalerBlur(signaler);
          }}
          />
        </Grid>
        <Grid item>
          <InputLabel>Mail</InputLabel>
          <Input 
            value={signaler?.mail}
            onChange={(e)=>{
              onSignalerChange({
                ...signaler,
                mail:e.target.value
              } as Signaler);
            }}  
            onBlur={()=>{
              if(onSignalerBlur)
                onSignalerBlur(signaler);
            }}        
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles<"root", { name: string }, Props>(styles, {
    name: "SignalerInput",
  })(SignalerInput);