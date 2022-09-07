import { Box, Navbar } from "@mantine/core";
import { Link } from "@remix-run/react";
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
      width={{ base: "100%", sm: 0 }}
      hidden={!opened}
      className={className}
    >
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <NavLinks />
      </Box>
    </Navbar>
  );
}
