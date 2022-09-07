import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {
  MantineProvider,
  createEmotionCache,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { StylesPlaceholder } from "@mantine/remix";
import { ghibliTheme } from "./lib/mantine/theme";
import styles from "./styles/app.css";
import { CustomFonts } from "./lib/mantine/fonts";
import { useLocalStorage } from "@mantine/hooks";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});
export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

createEmotionCache({ key: "mantine" });

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ ...ghibliTheme, colorScheme: colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <html lang="fr">
          <head>
            <StylesPlaceholder />
            <Meta />
            <Links />
            <CustomFonts />
          </head>
          <body>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </body>
        </html>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
