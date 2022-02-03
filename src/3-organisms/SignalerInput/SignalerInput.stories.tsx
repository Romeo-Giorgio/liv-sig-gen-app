//********** Import **********//
import { action } from "@storybook/addon-actions";
import SignalerInput from "./SignalerInput";
import { Signaler } from "./types";
import { useState } from "react";

//********** Stories **********//
export default {
    component: SignalerInput,
    title: "3-organisms/SignalerInput",
    parameters: {
      docs: {
        description: {
          component: ``,
        },
      },
    },
  };
  
  const list:Signaler[]=[
    {id: "0001", firstName:"John", lastName:"Doe", phone:"0678912345", mail:"joh.doe@gmail.com"},
    {id: "0002", firstName:"Patricien", lastName:"Cromwell", phone:"0678912345", mail:"pat.cro@gmail.com"},
    {id: "0003", firstName:"Catricien", lastName:"Promwell", phone:"0678912345", mail:"cat.pro@gmail.com"},
  ];


  export const DefaultStory = () => {
    const [currentSignaler, setCurrentSignaler]=useState<Signaler>(
      {id: "0000", firstName:"Tony", lastName:"Stark", phone:"0678912345", mail:"ton.sta@gmail.com"}
    );

    return (
      <SignalerInput 
        signalersList={list} 
        signaler={currentSignaler} 
        onSignalerChange={(v:Signaler|undefined)=>{
          if(v!=null){
            setCurrentSignaler(v);
            action("onSignalerChange")(v);
          }
        }}
        onSignalerBlur={(v:Signaler|undefined)=>{
          action("onSignalerBlur")(v);
        }}
        />
    );
  };
  DefaultStory.storyName = "Default";