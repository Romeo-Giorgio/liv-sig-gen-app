//********** Imports **********//
import { Provider } from "react-redux";
import MainMenuProvider, { MainMenuContext } from "./0-abstract/MainMenuContext/MainMenuContext";
import MapUtilsProvider from "./0-abstract/MapUtilsContext/MapUtilsContext";
import MainMenuPanel from "./5-panels/MainMenuPanel";
import MapHandler from "./5-panels/MapHandler";
  import RacesListPanel from "./5-panels/RacesListPanel";
import "./App.css";
import store from "./store";

//********** App **********//
function App() {  
  return (
    <>
      <Provider store={store}>
        <MainMenuProvider>
        <MapUtilsProvider>
          <MapHandler/>
          
          <MainMenuPanel
          />
          <RacesListPanel />
          {/* <SignalersListPanel /> */}
        </MapUtilsProvider>
        </MainMenuProvider>
        
      </Provider>
    </>
  );
}

export default App;
