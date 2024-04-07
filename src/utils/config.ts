// Theme options
export const MAIN_THEME_COLOURS = {
  PRIMARY_MAIN: 'rgb(25, 118, 210)',
  SECONDARY_MAIN: 'rgb(156, 39, 176)',
  TERTIARY_MAIN: 'rgb(253, 216, 53)',
};

// GUI features options
export const GUI_FEATURES = {
  SNACKBAR_AUTO_HIDE_DURATION: 6000,
  DRAWER_WIDTH: 240,
};

// File options
export const FILE_OPTIONS = {
  NAME_MAX_LENGTH: 30,
  NAME_MIN_LENGTH: 3,
  NAME_TEMPLATE: (index: number, extraString?: string | number) =>
    `Document_${index}_${extraString}.docx`,
};

// SEO options
export const SEO_OPTIONS = {
  GOOGLE_ANALYTICS_ID: 'G-TYKBL9E21N',
};
