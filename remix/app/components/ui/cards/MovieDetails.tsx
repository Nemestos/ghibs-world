import {
  BackgroundImage,
  Box,
  Center,
  Image,
  Stack,
  Title,
  Text,
  useMantineTheme,
  Paper,
  MediaQuery,
  Button,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import { useColor } from "color-thief-react";
import { useEffect } from "react";
import type { IMovie } from "~/types";
import Rating from "../Rating";

function MovieDetailsOverlay({ movie }: { movie: IMovie }) {
  const theme = useMantineTheme();

  return (
    <Center
      sx={{
        padding: 128,
        height: "100%",
      }}
    >
      <MediaQuery smallerThan={"lg"} styles={{ flexDirection: "column" }}>
        <Paper
          shadow="xs"
          p="md"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            gap: 128,
          }}
        >
          <Image src={movie.image} radius="lg" width={256} />
          <Stack>
            <Title variant="gradient">{movie.title}</Title>
            <Title weight={"bold"}>
              {movie.original_title}/{movie.original_title_romanised}
            </Title>
            <Title italic>{movie.release_date}</Title>
            <Rating rating={movie.rt_score} maxStar={5} max={100} />
            <Text>{movie.description}</Text>
            <Link to={"characters"}>
              <Button variant="gradient">Characters</Button>
            </Link>
          </Stack>
        </Paper>
      </MediaQuery>
    </Center>
  );
}

export default function MovieDetails({ movie }: { movie: IMovie }) {
  const theme = useMantineTheme();

  return (
    <BackgroundImage src={movie.movie_banner}>
      <Box mx="auto" sx={{ height: "100vh", backdropFilter: "blur(5px)" }}>
        <MovieDetailsOverlay movie={movie} />
      </Box>
    </BackgroundImage>
  );
}
