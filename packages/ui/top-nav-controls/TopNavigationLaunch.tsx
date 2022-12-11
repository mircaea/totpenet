import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { TopNavigationControls } from "./TopNavigationControls";
import { useStore } from "store";
import { Box } from "@mui/system";

export const TopNavigationLaunch = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <TopNavigationControls
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      <Box
        sx={{
          position: "fixed",
          top: "16px",
          width: "340px",
          left: "calc(50vw - 170px)",
        }}
      >
        <Button fullWidth={true} variant="outlined" onClick={handleOpen}>
          {t("open_main_controls")}
        </Button>
      </Box>
    </>
  );
};
