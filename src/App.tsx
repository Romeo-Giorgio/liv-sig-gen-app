import { Fade } from '@mui/material';
import { useState } from 'react';
import GMap from './3-organisms/GMap/GMap';
import MainMenuPanel from './5-panels/MainMenuPanel';
import RacesListPanel from './5-panels/RacesListPanel';
import SignalersListPanel from './5-panels/SignalersListPanel';
import './App.css';


//********** App **********//
function App() {
  const [showSignalersListPanel, setShowSignalersListPanel] = useState<boolean>(false);

  const onRacesButtonClick = ()=>{
    setShowSignalersListPanel(false);
  };
  const onIntersectionsButtonClick = ()=>{
    setShowSignalersListPanel(false);
  };
  const onSignalersButtonClick = ()=>{
    setShowSignalersListPanel(true);
  };
  return (
    <>
      <GMap/>
      <MainMenuPanel
        onRacesButtonClick={onRacesButtonClick}
        onIntersectionsButtonClick={onIntersectionsButtonClick}
        onSignalersButtonClick={onSignalersButtonClick}
      />
      <RacesListPanel/>
      <Fade in={showSignalersListPanel} unmountOnExit>
        <div>
          <SignalersListPanel/>
        </div>
      </Fade>
    </>
  );
}

export default App;
