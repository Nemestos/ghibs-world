import { Badge, Button, Card, Group, Image, Stack, Text } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { Link } from "@remix-run/react";
import type { ICharacter, IMovie } from "~/types";

export default function MovieCard({ movie }: { movie: IMovie }) {
  return (
    <Card
      shadow="sm"
      p="lg"
      withBorder
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Card.Section>
        <Image src={movie.movie_banner} />
      </Card.Section>
      <Group
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack justify="center" align="center">
          <Text>{movie.original_title_romanised}</Text>
          <Text>-</Text>
          <Text>{movie.original_title}</Text>
        </Stack>
        <Link to={`/movies/${movie.id}`}>
          <Button variant="gradient">View details</Button>
        </Link>
      </Group>
    </Card>
  );
}
