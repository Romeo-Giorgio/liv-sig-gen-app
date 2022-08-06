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
import { MainMenuUtils, MapUtils, Signaler } from "../../services/types";
import { useDispatch, useSelector } from "../../store";
import {
  createSignaler,
  deleteSignalerById,
  getSignalersList,
  signalerAdapter,
  updateSignaler,
} from "../../slices/signalerSlice";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";
import { randomId } from "../../const";

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
  }, [dispatch]);

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
  return (
    <>
      <Fade in={mode === "signaler"} unmountOnExit>
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
    </>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
