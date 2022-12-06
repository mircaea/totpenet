import React from "react";
import i18next from "i18next";

export const changeLanguage = (abv: string) => {
  if (!abv) return;
  i18next.changeLanguage(abv);
};
