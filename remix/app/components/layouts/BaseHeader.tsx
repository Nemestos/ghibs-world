import {
  Header,
  MediaQuery,
  Burger,
  createStyles,
  Text,
  useMantineTheme,
  Group,
  Button,
  Box,
} from "@mantine/core";

import { useState } from "react";
import MainLogo from "~/components/ui/MainLogo";
import ThemeToggle from "../ui/ThemeToggle";
import NavLinks from "./NavLinks";

export interface BaseHeaderProps {
  onClickBurger: () => void;
  opened: boolean;
}

export default function BaseHeader({
  onClickBurger,
  opened,
  className,
}: BaseHeaderProps & React.HTMLAttributes<HTMLDivElement>) {
  const theme = useMantineTheme();

  return (
    <Header height="auto" p="md">
      <Group align="center" style={{ justifyContent: "space-between" }} grow>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={onClickBurger}
            size="sm"
            color={theme.colors.secondary[6]}
            mr="xl"
          />
        </MediaQuery>
        <div className={className}>
          <Box style={{ display: "flex" }}>
            <NavLinks />
          </Box>{" "}
        </div>
        <MainLogo />
        <ThemeToggle />
      </Group>
    </Header>
  );
}
