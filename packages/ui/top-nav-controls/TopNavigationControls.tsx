import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useAppContext, useStore } from "store";
import {
  Backdrop,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import SignIn from "./SignIn";
import { sign_out } from "firebasepackage";
import { Box } from "@mui/system";
import LightDarkSwitch from "./LightDarkSwitch";

const stopPropagation = (event: any) => event.stopPropagation();
const WrapperGridItem = ({ children }: { children: React.ReactNode }) => {
  const style_paper = {
    padding: "16px 10px 10px 10px",
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
    justifyContent: "space-between",
  };

  return (
    <Grid
      item
      xs={1}
      sm={1}
      md={1}
      lg={1}
      xl={1}
      textAlign="center"
      onClick={stopPropagation}
    >
      <Paper sx={style_paper}>{children}</Paper>
    </Grid>
  );
};

interface InputProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const TopNavigationControls = ({ isOpen, handleClose }: InputProps) => {
  const { t } = useTranslation();
  const { themeMode, toggleThemeMode } = useStore();
  const { currentUser, language, languagePool, change_language } =
    useAppContext();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setShowLogin(false);
  }, [isOpen, setShowLogin]);

  const handleSignIn = () => setShowLogin(true);
  const handleSignOut = () =>
    sign_out(
      () => {},
      () => {}
    );

  const handleChangeLanguage = (event: any, data: any) =>
    change_language(data?.props?.value ? data.props.value : "en");

  const handle_close = () => handleClose();
  const handleSignInBack = () => setShowLogin(false);

  // xs, sm, md, lg, and xl

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={handle_close}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2.5, lg: 3, xl: 4 }}
        columns={{ xs: 1.25, sm: 1.75, md: 4, lg: 4, xl: 6 }}
        position="absolute"
        top={70}
        justifyContent="center"
        alignItems="center"
      >
        {showLogin ? (
          <Grid
            item
            xs={1}
            sm={1}
            md={2}
            lg={1.5}
            xl={1.5}
            textAlign="center"
            onClick={stopPropagation}
          >
            <SignIn goBack={handleSignInBack} />
          </Grid>
        ) : (
          <>
            <WrapperGridItem>
              <Typography sx={{ paddingBottom: "10px" }}>
                {t("website_language")}:
              </Typography>
              <Select
                value={language}
                onChange={handleChangeLanguage}
                size="small"
              >
                {languagePool.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {t(item)}
                  </MenuItem>
                ))}
              </Select>
            </WrapperGridItem>

            <WrapperGridItem>
              <Typography>{t("website_theme")}</Typography>
              <Typography sx={{ pb: "10px" }} color="secondary">
                {themeMode === "dark" ? t("dark_mode") : t("light_mode")}
              </Typography>
              <Box sx={{ margin: "auto" }}>
                <LightDarkSwitch
                  checked={themeMode === "dark"}
                  handleChange={toggleThemeMode}
                />
              </Box>
            </WrapperGridItem>

            <WrapperGridItem>
              <Typography>
                {`${t("authenticate")} ${
                  currentUser?.email ? `${t("welcome")}, ` : ""
                }`}
              </Typography>
              <Typography sx={{ pb: "10px" }} color="secondary">
                {currentUser?.email ? currentUser.email?.split("@")?.[0] : ""}
              </Typography>

              {currentUser ? (
                <Button onClick={handleSignOut} variant="outlined">
                  {t("sign_out")}
                </Button>
              ) : (
                <Button onClick={handleSignIn} variant="contained">
                  {t("sign_in")}
                </Button>
              )}
            </WrapperGridItem>
          </>
        )}
      </Grid>
    </Backdrop>
  );
};
