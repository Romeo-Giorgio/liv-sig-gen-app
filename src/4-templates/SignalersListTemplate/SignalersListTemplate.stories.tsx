//********** Import **********//
import { action } from "@storybook/addon-actions";
import SignalersListTemplate from "./SignalersListTemplate";
import { useState } from "react";
import { Signaler } from "../../3-organisms/SignalerInput/SignalerInput.types";

//********** Stories **********//
export default {
  component: SignalersListTemplate,
  title: "4-templates/SignalersListTemplate",
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
  },
};

const list: Signaler[] = [
  {
    id: "0000",
    firstName: "Tony",
    lastName: "Stark",
    phone: "0678912345",
    mail: "ton.sta@gmail.com",
  },
  {
    id: "0001",
    firstName: "John",
    lastName: "Doe",
    phone: "0678912345",
    mail: "joh.doe@gmail.com",
  },
  {
    id: "0002",
    firstName: "Patricien",
    lastName: "Cromwell",
    phone: "0678912345",
    mail: "pat.cro@gmail.com",
  },
  {
    id: "0003",
    firstName: "Catricien",
    lastName: "Promwell",
    phone: "0678912345",
    mail: "cat.pro@gmail.com",
  },
];

export const DefaultStory = () => {
  const [signalersList, setSignalersList] = useState<Signaler[]>(list);
  const [currentSignaler, setCurrentSignaler] = useState<Signaler | undefined>({
    id: "0000",
    firstName: "Tony",
    lastName: "Stark",
    phone: "0678912345",
    mail: "ton.sta@gmail.com",
  });

  return (
    <SignalersListTemplate
      selectedSignaler={currentSignaler}
      signalersList={signalersList}
      onSelectedSignalerChange={(v) => {
        setCurrentSignaler(v);
        action("onSelectedSignalerChange")(v);
      }}
      onSignalerDelete={(signalerId: string) => {
        setSignalersList(signalersList.filter((s) => s.id !== signalerId));
        action("onSignalerDeleteCallback")(signalerId);
      }}
      onSignalerEdit={(signalerId: string) => {
        action("onSignalerEdit")(signalerId);
      }}
      askToAddSignaler={() => {
        action("askToAddSignaler")();
      }}
    />
  );
};
DefaultStory.storyName = "Default";
