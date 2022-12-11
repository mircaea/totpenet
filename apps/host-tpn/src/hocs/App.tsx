import "translation"; // i18next needs to be bundled
import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import "./App.css";

import {
  Paper,
  ThemeProvider,
  createTheme,
  PaletteMode,
  useMediaQuery,
} from "@mui/material";
import { TopNavigationLaunch } from "ui";
import { useAppContext } from "store";
import { useMemo } from "react";

function App() {
  const { themeMode } = useAppContext();

  const theme = useMemo(() => {
    let result = themeMode ? "dark" : "light";

    return createTheme({ palette: { mode: result as PaletteMode } });
  }, [themeMode]);

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
