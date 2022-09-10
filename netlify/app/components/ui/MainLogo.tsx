import { Anchor, Image, Stack, Title } from "@mantine/core";
import { Link } from "@remix-run/react";

export default function MainLogo() {
  return (
    <Anchor component="a" underline={false}>
      <Stack align="center" justify="center">
        <Image
          src="/images/protect.png"
          alt="ghibli logo"
          width="7rem"
          height="7rem"
        />
        <Title order={2}>Ghibs World</Title>
      </Stack>
    </Anchor>
  );
}
