import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useStore } from "store";
import {
  Backdrop,
  Button,
  MenuItem,
  Paper,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { changeLanguage } from "translation";
import SignIn from "./SignIn";

interface InputProps {
  isOpen: boolean;
  handleClose: () => void;
}

export const TopNavigationControls = ({ isOpen, handleClose }: InputProps) => {
  const { t } = useTranslation();
  const {
    user,
    setUser,
    language,
    languagePool,
    setLanguage,
    themeMode,
    toggleThemeMode,
  } = useStore();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    setShowLogin(false);
  }, [isOpen, setShowLogin]);

  const toggleShowLogin = () => setShowLogin((prevState) => !prevState);

  const handleSignIn = () => {
    setShowLogin(true);
  };
  const handleSignOut = () => {
    setUser("");
  };
  const stopPropagation = (event: any) => event.stopPropagation();
  const handleChangeLanguage = (event: any, data: any) => {
    const value = data?.props?.value;
    setLanguage(value);
    changeLanguage(value);
  };
  const handle_close = () => {
    handleClose();
  };
  const handleSignInBack = () => setShowLogin(false);

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
      onClick={handle_close}
    >
      <Stack
        direction="row"
        spacing={3}
        sx={{
          width: "70vw",
          position: "fixed",
          top: "4rem",
          justifyContent: "center",
        }}
      >
        {showLogin ? (
          <div onClick={stopPropagation}>
            <SignIn goBack={handleSignInBack} />
          </div>
        ) : (
          <>
            <Paper
              sx={{
                padding: 4,
                paddingTop: 2,
                paddingBottom: 2,
              }}
              onClick={stopPropagation}
            >
              <Typography sx={{ paddingBottom: "10px" }}>
                {t("website_language")}:
              </Typography>
              <Select value={language} onChange={handleChangeLanguage}>
                {languagePool.map((item, idx) => (
                  <MenuItem key={idx} value={item}>
                    {t(item)}
                  </MenuItem>
                ))}
              </Select>
            </Paper>

            <Paper
              sx={{
                padding: 4,
                paddingTop: 2,
                paddingBottom: 2,
              }}
              onClick={stopPropagation}
            >
              <Typography>{t("website_theme")}</Typography>
              <Typography sx={{ pb: "10px" }} color="secondary">
                {`${t("using")} ${
                  themeMode === "dark" ? t("dark_mode") : t("light_mode")
                }`}
              </Typography>
              <Switch
                checked={themeMode === "dark"}
                onChange={toggleThemeMode}
              />
            </Paper>

            <Paper
              sx={{
                padding: 4,
                paddingTop: 2,
                paddingBottom: 2,
              }}
              onClick={stopPropagation}
            >
              <Typography>{t("sign_in")}</Typography>
              <Typography sx={{ pb: "10px" }} color="secondary">
                {user ? `${t("welcome")}, ${user}` : t("need_to_sign_in")}
              </Typography>
              {user ? (
                <Button onClick={handleSignOut} variant="outlined">
                  {t("sign_out")}
                </Button>
              ) : (
                <Button onClick={handleSignIn} variant="contained">
                  {t("sign_in")}
                </Button>
              )}
            </Paper>
          </>
        )}
      </Stack>
    </Backdrop>
  );
};
