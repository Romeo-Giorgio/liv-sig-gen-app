//********** Imports **********//
import { createContext, useState } from "react";
import { MapUtils, Signaler } from "../../services/types";

//********** Context **********//
export const MapUtilsContext = createContext<MapUtils | null>(null);

const MapUtilsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedRaceId, setSelectedRaceId] = useState<string>();
  const [selectedSignaler, setSelectedSignaler] = useState<Signaler>();
  return (
    <MapUtilsContext.Provider
      value={{
        selectedRaceId,
        setSelectedRaceId,
        selectedSignaler,
        setSelectedSignaler,
      }}
    >
      {children}
    </MapUtilsContext.Provider>
  );
};

export default MapUtilsProvider;
