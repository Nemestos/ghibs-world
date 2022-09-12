import {
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Box,
  createStyles,
  Transition,
  Navbar,
  Container,
} from "@mantine/core";
import { useState } from "react";

import MainLogo from "~/components/ui/MainLogo";
import ThemeToggle from "../ui/ThemeToggle";
import BaseNavbar from "./BaseNavbar";
import NavLinks from "./NavLinks";

export const HEADER_HEIGHT = 200;
const useStyles = createStyles((theme) => ({}));

export default function BaseHeader() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);
  return (
    <Header height={HEADER_HEIGHT} p="md" sx={{ zIndex: 5 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <MainLogo />
          </div>
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <Box style={{ display: "flex" }}>
              <NavLinks />
            </Box>
          </div>
        </MediaQuery>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            color={theme.colors.secondary[6]}
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <ThemeToggle />
          </div>
        </MediaQuery>
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => <BaseNavbar styles={styles} />}
        </Transition>
      </Container>
    </Header>
  );
}
