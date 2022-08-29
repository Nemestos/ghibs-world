import {
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  Stack,
  useColorMode,
  Link as ChakraLink,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import React from "react";
import ToggleTheme from "./ToggleTheme";
const NavLink = ({
  dest,
  children,
}: {
  dest: string;
  children: React.ReactNode;
}) => (
  <Link to={dest}>
    <ChakraLink
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("ghibli.500", "ghibli.600"),
      }}
    >
      {children}
    </ChakraLink>
  </Link>
);

export default function Navbar() {
  const { colorMode } = useColorMode();
  const bgColor = colorMode == "dark" ? "ghibli.100" : "ghibli.800";

  return (
    <>
      <Box m={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          bgColor={bgColor}
          px={4}
          rounded={"2xl"}
        >
          <Heading>Ghibs-World</Heading>
          <Flex bgColor={"ghibli"}>
            <NavLink dest="/characters">Characters</NavLink>
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <ToggleTheme />
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
