import { ActionIcon, Badge, Card, Group, Text } from "@mantine/core";
import { Link } from "@remix-run/react";
import { BsFillPeopleFill } from "react-icons/bs";
import type { Climate, ILocation, Terrain } from "~/types";

const climatesColor: Record<Climate, string> = {
  Continental: "#88E100",

  Dry: "#CE2800",

  Mild: "#FF992A",

  Tropical: "#FBE70A",

  Wet: "#359DD0",
};

const terrainsColor: Record<Terrain, string> = {
  Mountain: "#808080",

  Hill: "#9D9D7E",

  Plain: "#FF992A",

  Marsh: "#5C5337",

  Forest: "#133626",
  City: "#402158",
  Ocean: "#2645E0",
  River: "#63B9DB",
};

export default function LocationCard({ location }: { location: ILocation }) {
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
          {location.name}
        </Text>
      </Card.Section>
      <Group>
        {
          <Badge
            sx={{
              backgroundColor: climatesColor[location.climate],
              color: "black",
            }}
          >
            {location.climate}
          </Badge>
        }
        <Badge
          sx={{
            backgroundColor: terrainsColor[location.terrain],
            color: "black",
          }}
        >
          {location.terrain}
        </Badge>
      </Group>

      <Link to={`/locations/${location.id}/residents`}>
        <ActionIcon>
          <BsFillPeopleFill />
        </ActionIcon>
      </Link>
    </Card>
  );
}
