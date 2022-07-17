//********** Imports **********//
import { createContext, useState } from "react";
import { MapUtils } from "../../services/types";

//********** Context **********//
export const MapUtilsContext = createContext<MapUtils | null>(null);

const MapUtilsProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [selectedRaceId, setSelectedRaceId] = useState<string>();
  return (
    <MapUtilsContext.Provider
      value={{
        selectedRaceId,
        setSelectedRaceId,
      }}
    >
      {children}
    </MapUtilsContext.Provider>
  );
};

export default MapUtilsProvider;
