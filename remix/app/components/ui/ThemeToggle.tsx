import {
  createStyles,
  Group,
  UnstyledButton,
  useMantineColorScheme,
  Text,
  Center,
} from "@mantine/core";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
const useStyles = createStyles((theme) => ({
  control: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 136,
    height: 36,
  },
  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.dark[4],
    color: theme.colorScheme === "dark" ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}));

export default function ThemeToggle() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === "dark" ? BsFillSunFill : BsFillMoonFill;

  return (
    <Group position="center" my={"xl"}>
      <UnstyledButton
        aria-label="Toggle theme"
        className={classes.control}
        onClick={() => toggleColorScheme()}
      >
        <Text>{colorScheme === "light" ? "dark" : "light"}</Text>
        <Center className={classes.iconWrapper}>
          <Icon />
        </Center>
      </UnstyledButton>
    </Group>
  );
}
