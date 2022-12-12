import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { TopNavigationControls } from "./TopNavigationControls";
import { Box } from "@mui/system";

export const TopNavigationLaunch = () => {
  const { t } = useTranslation();
  const [showControls, setShowControls] = useState(false);

  const openControls = () => setShowControls(true);
  const closeControls = () => setShowControls(false);

  return (
    <>
      <TopNavigationControls
        showControls={showControls}
        closeControls={closeControls}
      />
      <Box
        sx={{
          position: "fixed",
          top: "16px",
          width: "340px",
          left: "calc(50vw - 170px)",
        }}
      >
        <Button fullWidth={true} variant="outlined" onClick={openControls}>
          {t("open_main_controls")}
        </Button>
      </Box>
    </>
  );
};
