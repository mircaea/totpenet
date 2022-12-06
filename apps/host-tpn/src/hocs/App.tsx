import "translation"; // i18next needs to be bundled
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./App.css";

import { Paper, ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import { TopNavigationLaunch } from "ui";
import { useStore } from "store";
import { useMemo } from "react";

function App() {
  const { themeMode } = useStore();

  const theme = useMemo(
    () => createTheme({ palette: { mode: themeMode as PaletteMode } }),
    [themeMode]
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Paper>
          <TopNavigationLaunch />
          <Routing />
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
