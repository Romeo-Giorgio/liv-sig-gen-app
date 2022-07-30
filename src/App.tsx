//********** Imports **********//
import { Provider } from "react-redux";
import MainMenuProvider, {
  MainMenuContext,
} from "./0-abstract/MainMenuContext/MainMenuContext";
import MapUtilsProvider from "./0-abstract/MapUtilsContext/MapUtilsContext";
import MainMenuPanel from "./5-panels/MainMenuPanel";
import MapHandler from "./5-panels/MapHandler";
import RacePointsListPanel from "./5-panels/RacePointsListPanel";
import RacesListPanel from "./5-panels/RacesListPanel";
import SignalersListPanel from "./5-panels/SignalersListPanel";
import "./App.css";
import store from "./store";

//********** App **********//
function App() {
  return (
    <>
      <Provider store={store}>
        <MainMenuProvider>
          <MapUtilsProvider>
            <MapHandler />

            <MainMenuPanel />
            <RacesListPanel />
            <RacePointsListPanel />
            <SignalersListPanel />
          </MapUtilsProvider>
        </MainMenuProvider>
      </Provider>
    </>
  );
}

export default App;
