import { useMantineTheme, AppShell } from "@mantine/core";
import type { ReactNode } from "react";
import BaseHeader from "./BaseHeader";

export default function BaseLayout({ children }: { children?: ReactNode }) {
  const theme = useMantineTheme();

  return <AppShell header={<BaseHeader />}>{children}</AppShell>;
}
