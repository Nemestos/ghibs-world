import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Box,
} from "@mantine/core";

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
    <Header height={200} p="md">
      <Group align="center" style={{ justifyContent: "space-between" }} grow>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={onClickBurger}
            color={theme.colors.secondary[6]}
            mr="xl"
          />
        </MediaQuery>
        <div className={className}>
          <Box style={{ display: "flex" }}>
            <NavLinks />
          </Box>{" "}
        </div>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <MainLogo />
          </div>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <ThemeToggle />
          </div>
        </MediaQuery>
      </Group>
    </Header>
  );
}
