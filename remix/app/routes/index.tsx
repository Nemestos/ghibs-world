import { Button, Heading } from "@chakra-ui/react";
import { Outlet } from "@remix-run/react";
import Navbar from "../src/components/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
