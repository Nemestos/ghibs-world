import { Box, MediaQuery, Navbar, Paper } from "@mantine/core";
import { Link } from "@remix-run/react";
import { CSSProperties } from "react";
import MainLogo from "../ui/MainLogo";
import ThemeToggle from "../ui/ThemeToggle";
import { HEADER_HEIGHT } from "./BaseHeader";
import NavLinks from "./NavLinks";

export interface BaseNavbarProps {
  styles: CSSProperties;
}

export default function BaseNavbar({ styles }: BaseNavbarProps) {
  return (
    <MediaQuery largerThan={"sm"} styles={{ display: "none" }}>
      <Paper
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: HEADER_HEIGHT,
          zIndex: 0,
          overflow: "hidden",
        }}
        style={styles}
        withBorder
      >
        <Navbar.Section>
          <MainLogo />
        </Navbar.Section>
        <Navbar.Section>
          <ThemeToggle />
        </Navbar.Section>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <NavLinks />
        </Box>
      </Paper>
    </MediaQuery>
  );
}
