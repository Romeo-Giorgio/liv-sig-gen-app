//********** Imports **********//
import { createContext, useState } from "react";
import { MainMenuUtil, MainMenuMode } from "../../services/types";

//********** Context **********//
export const MainMenuContext = createContext<MainMenuUtil | null>(null);

const MainMenuProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [mode, setMode] = useState<MainMenuMode>("race");
  return (
    <MainMenuContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      {children}
    </MainMenuContext.Provider>
  );
};

export default MainMenuProvider;
