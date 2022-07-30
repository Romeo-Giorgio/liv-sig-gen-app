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
import { getSignalersList, signalerAdapter } from "../../slices/signalerSlice";
import { MapUtilsContext } from "../../0-abstract/MapUtilsContext/MapUtilsContext";

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
  return (
    <>
      <Fade in={mode === "signaler"} unmountOnExit>
        <StyledListCard>
          <StyledCardContent>
            <SignalersListTemplate
              askToAddSignaler={() => {
                setOpenSignalerInputPanel(!openSignalerInputPanel);
              }}
              onSelectedSignalerChange={onSelectedSignalerChange}
              onSignalerDelete={() => {}}
              onSignalerEdit={() => {}}
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
              onSignalerBlur={() => {}}
              onSignalerChange={() => {}}
              signaler={selectedSignaler}
              signalersList={signalers}
            />
          </StyledCardContent>
        </StyledInputCard>
      </Fade>
    </>
  );
};
MainBarPanel.displayName = "MainBarPanel";

export default MainBarPanel;
