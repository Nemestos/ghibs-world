import { Outlet } from "@remix-run/react";
import { Text } from "@mantine/core";
export default function Index() {
  return (
    <>
      <Text>test</Text>
      <Outlet />
    </>
  );
}
