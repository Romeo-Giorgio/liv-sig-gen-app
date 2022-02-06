//********** Import **********//
import { action } from "@storybook/addon-actions";
import SignalersList from "./SignalersList";
import { useState } from "react";
import { Signaler } from "../SignalerInput/types";

//********** Stories **********//
export default {
  component: SignalersList,
  title: "3-organisms/SignalersList",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};
  
const list:Signaler[]=[
  {id: "0000", firstName:"Tony", lastName:"Stark", phone:"0678912345", mail:"ton.sta@gmail.com"},
  {id: "0001", firstName:"John", lastName:"Doe", phone:"0678912345", mail:"joh.doe@gmail.com"},
  {id: "0002", firstName:"Patricien", lastName:"Cromwell", phone:"0678912345", mail:"pat.cro@gmail.com"},
  {id: "0003", firstName:"Catricien", lastName:"Promwell", phone:"0678912345", mail:"cat.pro@gmail.com"},
];

export const DefaultStory = () => {
  const [signalersList, setSignalersList] = useState<Signaler[]>(list);
  const [currentSignaler, setCurrentSignaler]=useState<Signaler|undefined>(
    {id: "0000", firstName:"Tony", lastName:"Stark", phone:"0678912345", mail:"ton.sta@gmail.com"}
  );

  return (
    <SignalersList 
      selectedSignaler={currentSignaler}
      signalersList={signalersList}
      onSelectedSignalerChange={(v)=>{
        setCurrentSignaler(v);
        action("onSelectedSignalerChange")(v);
      }}
      onSignalerEdit={(signalerId:string)=>{
        action("onSignalerEdit")(signalerId);
      }}
      onSignalerDelete={(signalerId:string)=>{
        setSignalersList(signalersList.filter(s=>s.id !== signalerId));
        action("onSignalerDeleteCallback")(signalerId);
      }}
    />
  );
};
DefaultStory.storyName = "Default";