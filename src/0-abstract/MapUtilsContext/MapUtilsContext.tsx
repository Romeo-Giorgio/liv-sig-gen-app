//********** Imports **********//
import { createContext, useState } from "react";
import { MapUtils, Race, Signaler } from "../../services/types";

//********** Context **********//
export const MapUtilsContext = createContext<MapUtils | null>(null);

const MapUtilsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedRace, setSelectedRace] = useState<Race>();
  const [selectedSignaler, setSelectedSignaler] = useState<Signaler>();
  return (
    <MapUtilsContext.Provider
      value={{
        selectedRace,
        setSelectedRace,
        selectedSignaler,
        setSelectedSignaler,
      }}
    >
      {children}
    </MapUtilsContext.Provider>
  );
};

export default MapUtilsProvider;
