import { Global } from "@mantine/core";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Ghibli",
            fontStyle: "normal",
            fontWeight: 500,
            src: `url('/fonts/Ghibli.woff') format('woff')`,
          },
        },
        {
          "@font-face": {
            fontFamily: "Ghibli",
            src: `url('/fonts/Ghibli-Bold.woff') format('woff')`,
            fontWeight: 700,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
