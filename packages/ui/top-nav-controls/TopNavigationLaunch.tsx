import React, { useMemo, useState } from "react";
import { Button, createTheme, PaletteMode } from "@mui/material";
import { TopNavigationControls } from "./TopNavigationControls";
import { useStore } from "store";

export const TopNavigationLaunch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeMode, setThemeMode, toggleThemeMode } = useStore();

  const handleToggleTheme = () => {
    toggleThemeMode();
  };
  const theme = useMemo(
    () => createTheme({ palette: { mode: themeMode as PaletteMode } }),
    [themeMode]
  );

  return (
    <>
      <TopNavigationControls
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      <Button
        sx={{ position: "fixed", top: "1rem", left: "calc(50vw - 70px)" }}
        variant="outlined"
        onClick={() => setIsOpen(true)}
      >
        open website general controls
      </Button>
    </>
  );
};
