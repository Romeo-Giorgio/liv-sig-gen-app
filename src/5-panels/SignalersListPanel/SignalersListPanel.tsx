//********** Imports **********//
import Panel from "../Panel";
import { Props, StylesProps } from "./types";
import styles, { panelClasses } from "./styles";
import { Fade, withStyles } from "@material-ui/core";
import SignalersListTemplate from "../../4-templates/SignalersListTemplate";
import { Signaler } from "../../3-organisms/SignalerInput/types";
import SignalerInput from "../../3-organisms/SignalerInput";
import { useState } from "react";

//********** Component **********//
const MainBarPanel = (p: Props) => {
  const props = p as StylesProps;

  const [openSignalerInputPanel, setOpenSignalerInputPanel] = useState<boolean>(false);
  // Using the storybook, the component need data to display coherent HMI. 
  // TODO: When the backend will be connected through API, this component will use the redux store to get its data.
  const temporaryList:Signaler[]=[
    {id: "0000", firstName:"Tony", lastName:"Stark", phone:"0678912345", mail:"ton.sta@gmail.com"},
    {id: "0001", firstName:"John", lastName:"Doe", phone:"0678912345", mail:"joh.doe@gmail.com"},
    {id: "0002", firstName:"Patricien", lastName:"Cromwell", phone:"0678912345", mail:"pat.cro@gmail.com"},
    {id: "0003", firstName:"Catricien", lastName:"Promwell", phone:"0678912345", mail:"cat.pro@gmail.com"},
  ];

  return (
    <>
      <Panel hasHeader={false} className={panelClasses(props, "list")}>
        <SignalersListTemplate 
        askToAddSignaler={()=>{
          setOpenSignalerInputPanel(!openSignalerInputPanel);
        }}
        onSelectedSignalerChange={()=>{}}
        onSignalerDelete={()=>{}}
        onSignalerEdit={()=>{}}
        selectedSignaler={temporaryList[1]}
        signalersList={temporaryList}
        inputOpen={openSignalerInputPanel}
        />
      </Panel>
      <Fade in={openSignalerInputPanel}>
        <Panel hasHeader={false} className={panelClasses(props, "input")}>
          <SignalerInput 
            onSignalerBlur={()=>{}}
            onSignalerChange={()=>{}}
            signaler={{}as Signaler}
            signalersList={temporaryList}
          />
        </Panel>
      </Fade>
    </>
    
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default withStyles<"root", { name: string }, Props>(styles, {
  name: "MainBarPanel",
})(MainBarPanel);
