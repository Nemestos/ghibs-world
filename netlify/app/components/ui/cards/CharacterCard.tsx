import { ActionIcon, Badge, Card, Group, Image, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import { BiMovie } from "react-icons/bi";
import type { ICharacter } from "~/types";

export default function CharacterCard({
  character,
}: {
  character: ICharacter;
}) {
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
        <Text size="xl" gradient={{ from: "indigo", to: "cyan", deg: 45 }}>
          {character.name}
        </Text>
      </Card.Section>
      <Group>
        <Text>{character.gender}</Text>
        <Badge color={character.hair_color.toLowerCase()}>Hairs</Badge>
        <Badge color={character.eye_color}>Eyes</Badge>
      </Group>

      <Link to={`/characters/${character.id}/movies`}>
        <ActionIcon>
          <BiMovie />
        </ActionIcon>
      </Link>
    </Card>
  );
}
