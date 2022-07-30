//********** Imports **********//
import { Props } from "./MainMenu.types";
import { Divider } from "@mui/material";
import { People, Timeline, Room, ExitToApp } from "@mui/icons-material";
import { useContext, useEffect, useState } from "react";
import {
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
} from "./MainMenu.slots";
import { MainMenuContext } from "../../0-abstract/MainMenuContext/MainMenuContext";
import { MainMenuUtils } from "../../services/types";

//********** Component **********//
const MainMenu = (props: Props) => {
  const { mode, setMode } = useContext(MainMenuContext) as MainMenuUtils;

  return (
    <StyledAppBar>
      <StyledToolbar>
        <StyledIconButton
          selected={mode === "race"}
          onClick={() => {
            setMode("race");
          }}
        >
          <Timeline />
        </StyledIconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <StyledIconButton
          selected={mode === "intersection"}
          onClick={() => {
            setMode("intersection");
          }}
        >
          <Room />
        </StyledIconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <StyledIconButton
          selected={mode === "signaler"}
          onClick={() => {
            setMode("signaler");
          }}
        >
          <People />
        </StyledIconButton>
        <Divider orientation="vertical" variant="middle" flexItem />
        <StyledIconButton
          selected={mode === "export"}
          onClick={() => {
            setMode("export");
          }}
        >
          <ExitToApp />
        </StyledIconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default MainMenu;
