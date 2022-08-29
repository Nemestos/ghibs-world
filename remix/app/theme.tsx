import {
  extendTheme,
  theme as defaultTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    ...defaultTheme,

    colors: {
      ...defaultTheme.colors,

      ghibli: {
        100: "#641123",
        200: "#83414f",
        300: "#935865",
        400: "#a2707b",
        500: "#b28891",
        600: "#c1a0a7",
        700: "#d1b8bd",
        800: "#e0cfd3",
        900: "#f0e7e9",
      },
    },
    fonts: {
      heading: "'Ghibli Regular',sans-serif;",
      body: "'Ghibli Regular',sans-serif;",
    },
  },
  withDefaultColorScheme({ colorScheme: "ghibli" })
);
export default theme;
