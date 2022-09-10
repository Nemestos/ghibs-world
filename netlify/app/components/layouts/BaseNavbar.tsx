import { Box, Navbar } from "@mantine/core";
import { Link } from "@remix-run/react";
import MainLogo from "../ui/MainLogo";
import ThemeToggle from "../ui/ThemeToggle";
import NavLinks from "./NavLinks";

export interface BaseNavbarProps {
  opened: boolean;
}

export default function BaseNavbar({
  opened,
  className,
}: BaseNavbarProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Navbar
      height="100%"
      p="xs"
      width={{ base: 300 }}
      hidden={!opened}
      className={className}
      position={{ right: 0 }}
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
    </Navbar>
  );
}
