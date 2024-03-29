//********** Imports **********//
import { Props } from "./SignalersListPanel.types";
import {
  StyledListCard,
  StyledInputCard,
  StyledCardContent,
} from "./SignalersListPanel.slots";
import { Fade } from "@mui/material";
import SignalersListTemplate from "../../4-templates/SignalersListTemplate";
import SignalerInput from "../../3-organisms/SignalerInput";
import { useContext, useEffect, useState } from "react";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import {
  Evenement,
  MainMenuUtils,
  MapUtils,
  Signaler,
} from "../../services/types";
import store, { useDispatch, useSelector } from "../../store";
import {
  createSignaler,
  deleteSignalerById,
  getSignalersList,
  signalerAdapter,
  updateSignaler,
} from "../../slices/signalerSlice";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { randomId } from "../../const";
import SignalerExport from "../../3-organisms/SignalerExport";
import {
  evenementAdapter,
  getEvenement,
  updateEvenement,
} from "../../slices/evenementSlice";

//********** Component **********//
const MainBarPanel = (props: Props) => {
  const [openSignalerInputPanel, setOpenSignalerInputPanel] =
    useState<boolean>(false);
  const { mode } = useContext(MainMenuContext) as MainMenuUtils;
  const { setSelectedSignaler, selectedSignaler } = useContext(
    MapUtilsContext
  ) as MapUtils;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSignalersList());
    dispatch(getEvenement());
  }, [dispatch]);

  const storeEvenement = useSelector(
    (state) => evenementAdapter.getSelectors().selectAll(state.evenement)[0]
  );

  const [currentEvenement, setCurrentEvenement] =
    useState<Evenement | undefined>();

  const signalers = useSelector((state) =>
    signalerAdapter.getSelectors().selectAll(state.signalers)
  );
  const onSelectedSignalerChange = (signaler: Signaler) => {
    setSelectedSignaler({
      id: signaler.id,
      drivingLicence: signaler.drivingLicence,
      firstName: signaler.firstName,
      lastName: signaler.lastName,
      latitude: signaler.latitude,
      longitude: signaler.longitude,
      mail: signaler.mail,
      phone: signaler.phone,
      referent: signaler.referent,
      previousSignaler: signaler.previousSignaler,
      nextSignaler: signaler.nextSignaler,
      localisation: signaler.localisation,
    });
  };
  const onSignalerDelete = (signalerId: string) => {
    dispatch(deleteSignalerById(signalerId));
  };
  const onSignalerEdit = (signalerId: string) => {
    setSelectedSignaler(
      signalers.find((signaler) => signaler.id === signalerId)
    );
    setOpenSignalerInputPanel(true);
  };

  const onSignalerSave = () => {
    if (
      signalers
        .map((signaler) => signaler.id)
        .includes(selectedSignaler?.id!) &&
      selectedSignaler != null
    ) {
      dispatch(updateSignaler(selectedSignaler));
    } else if (selectedSignaler != null) {
      dispatch(createSignaler(selectedSignaler));
    }
  };

  const onEvenementSave = () => {
    if (currentEvenement != null) {
      dispatch(updateEvenement(currentEvenement));
    }
  };
  return (
    <>
      <Fade in={mode === "signaler" || mode === "export"} unmountOnExit>
        <StyledListCard>
          <StyledCardContent>
            <SignalersListTemplate
              askToAddSignaler={() => {
                setOpenSignalerInputPanel(!openSignalerInputPanel);
                setSelectedSignaler({
                  id: randomId(10),
                  firstName: "",
                  lastName: "",
                  mail: "",
                  phone: "",
                  drivingLicence: false,
                  localisation: "",
                });
              }}
              onSelectedSignalerChange={onSelectedSignalerChange}
              onSignalerDelete={onSignalerDelete}
              onSignalerEdit={onSignalerEdit}
              selectedSignaler={selectedSignaler}
              signalersList={signalers}
              inputOpen={openSignalerInputPanel}
            />
          </StyledCardContent>
        </StyledListCard>
      </Fade>
      <Fade in={openSignalerInputPanel && mode === "signaler"}>
        <StyledInputCard>
          <StyledCardContent>
            <SignalerInput
              signaler={selectedSignaler}
              signalersList={signalers}
              onSignalerSave={onSignalerSave}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
      <Fade in={mode === "export" && selectedSignaler != null} unmountOnExit>
        <StyledInputCard>
          <StyledCardContent>
            <SignalerExport
              evenement={currentEvenement || storeEvenement}
              setEvenement={setCurrentEvenement}
              saveEvenement={onEvenementSave}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
    </>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
