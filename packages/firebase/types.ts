export interface SettingsType {
  name?: string | undefined;
  notes?: string | undefined;
  bEmail?: string | undefined;
  bPhone?: string | undefined;
  bAddress?: string | undefined;
  defLanguage?: string | undefined;
  updatedAt?: number;
}

export interface DbMediaType {
  id?: string;
  name?: string;
  url?: string;
  bucketPath?: string;
  size?: number;
  type?: string;
  createdAt?: number;
}

export const DataPerLanguageDefaults = {
  de: "",
  en: "",
  ro: "",
  es: "",
};
export interface DataPerLanguage {
  de?: string;
  en?: string;
  ro?: string;
  es?: string;
}

export enum AdminPaths {
  BASE = "/admin",
  USER = "/admin/user",
  THEMES = "/admin/themes",
  LAYOUT = "/admin/layout",
  ROUTES = "/admin/routes",
  BASIC_COMPONENTS = "/admin/basic-components",
  HOCS = "/admin/high-order-components",
  MEDIA = "/admin/media",
  SETTINGS = "/admin/settings",
}

export interface TranslationMonthsArray {
  value: number;
  label: string;
}
