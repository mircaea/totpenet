import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "store";
import {
  Backdrop,
  Button,
  Grid,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Authenticate from "./Authenticate";
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
  showControls: boolean;
  closeControls: () => void;
}

export const TopNavigationControls = ({
  showControls,
  closeControls,
}: InputProps) => {
  const { t } = useTranslation();
  const { currentUser, language, languagePool, change_language, themeMode } =
    useAppContext();
  const [showAuthenticate, setShowAuthenticate] = useState(false);

  const openAuthenticate = () => setShowAuthenticate(true);
  const cancelAuthenticate = () => setShowAuthenticate(false);
  const closeAuthenticateAndStopPropagation = (event: any) => {
    event.stopPropagation();
    cancelAuthenticate();
  };
  const handleSignOut = () =>
    sign_out(
      () => {},
      () => {}
    );

  const handleChangeLanguage = (event: any, data: any) => {
    if (!data?.props?.value) return;
    change_language(data.props.value);
  };

  // xs, sm, md, lg, and xl

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showControls}
      onClick={closeControls}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2.5, lg: 3, xl: 4 }}
        columns={{ xs: 1.1, sm: 1.5, md: 4, lg: 4, xl: 6 }}
        position="fixed"
        top={16}
        justifyContent="center"
        alignItems="center"
      >
        {showAuthenticate && (
          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            onClick={closeAuthenticateAndStopPropagation}
          >
            <Grid
              position="fixed"
              top={16}
              width="100%"
              item
              xs={1}
              sm={1}
              md={2}
              lg={1.5}
              xl={1.5}
              textAlign="center"
              onClick={stopPropagation}
            >
              <Authenticate cancelAuthenticate={cancelAuthenticate} />
            </Grid>
          </Backdrop>
        )}

        <WrapperGridItem>
          <Typography sx={{ paddingBottom: "10px" }}>
            {t("website_language")}:
          </Typography>
          <Select value={language} onChange={handleChangeLanguage} size="small">
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
            {themeMode ? t("dark_mode") : t("light_mode")}
          </Typography>
          <Box sx={{ margin: "auto" }}>
            <LightDarkSwitch />
          </Box>
        </WrapperGridItem>

        <WrapperGridItem>
          <Typography>
            {`${currentUser?.email ? `${t("welcome")}, ` : t("authenticate")}`}
          </Typography>
          <Typography sx={{ pb: "10px" }} color="secondary">
            {currentUser?.email ? currentUser.email?.split("@")?.[0] : ""}
          </Typography>

          {currentUser ? (
            <Button onClick={handleSignOut} variant="outlined">
              {t("sign_out")}
            </Button>
          ) : (
            <Button onClick={openAuthenticate} variant="contained">
              {t("sign_in")}
            </Button>
          )}
        </WrapperGridItem>
      </Grid>
    </Backdrop>
  );
};
