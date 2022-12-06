import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useStore } from "store";
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

export const LanguageSelectDropdown = () => {
  const { t } = useTranslation();
  const { language, languagePool, setLanguage } = useStore();
  // const selected = localStorage.getItem("i18nextLng") || "en";

  return (
    <>
      {/* <InputLabel id="language-select-label">{t(language)}</InputLabel> */}
      <Typography>{t("website_language")}:</Typography>
      <Select
        // labelId="language-select-label"
        // id="demo-simple-select"
        value={language}
        // label=""
        onChange={() => {}}
      >
        {languagePool.map((item, idx) => (
          <MenuItem key={idx} value={item}>
            {t(item)}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
