import { useMantineTheme, AppShell, createStyles } from "@mantine/core";
import { Outlet } from "@remix-run/react";
import { ReactNode, useState } from "react";
import BaseHeader from "./BaseHeader";
import BaseNavbar from "./BaseNavbar";
const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));
export default function BaseLayout({ children }: { children?: ReactNode }) {
  const { classes } = useStyles();

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const onClickBurger = () => setOpened((o) => !o);

  return (
    <AppShell
      // navbar={<BaseNavbar opened={opened} className={classes.navbar} />}
      header={
        <BaseHeader
          onClickBurger={onClickBurger}
          opened={opened}
          className={classes.links}
        />
      }
    >
      {children}
    </AppShell>
  );
}
