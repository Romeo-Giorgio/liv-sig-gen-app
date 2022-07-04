import { Fade } from "@mui/material";
import { createStore } from "@reduxjs/toolkit";
import { useState } from "react";
import { Provider } from "react-redux";
import MapUtilsProvider from "./0-abstract/MapUtilsContext/MapUtilsContext";
import GMap from "./3-organisms/GMap/GMap";
import MainMenuPanel from "./5-panels/MainMenuPanel";
import RacesListPanel from "./5-panels/RacesListPanel";
import SignalersListPanel from "./5-panels/SignalersListPanel";
import "./App.css";
import store from "./store";

//********** App **********//
function App() {
  const [showSignalersListPanel, setShowSignalersListPanel] =
    useState<boolean>(false);

  const onRacesButtonClick = () => {
    setShowSignalersListPanel(false);
  };
  const onIntersectionsButtonClick = () => {
    setShowSignalersListPanel(false);
  };
  const onSignalersButtonClick = () => {
    setShowSignalersListPanel(true);
  };
  return (
    <>
      <Provider store={store}>
        <MapUtilsProvider>
          <GMap />
          <MainMenuPanel
            onRacesButtonClick={onRacesButtonClick}
            onIntersectionsButtonClick={onIntersectionsButtonClick}
            onSignalersButtonClick={onSignalersButtonClick}
          />
          <RacesListPanel />
          <Fade in={showSignalersListPanel} unmountOnExit>
            <div>
              <SignalersListPanel />
            </div>
          </Fade>
        </MapUtilsProvider>
      </Provider>
    </>
  );
}

export default App;
