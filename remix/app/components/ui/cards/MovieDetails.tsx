import {
  BackgroundImage,
  Box,
  Center,
  Group,
  Image,
  Overlay,
  Stack,
  Title,
  Text,
  useMantineTheme,
  AspectRatio,
  Container,
  Paper,
  MediaQuery,
} from "@mantine/core";
import type { IMovie } from "~/types";
import Rating from "../Rating";

function MovieDetailsOverlay({ movie }: { movie: IMovie }) {
  return (
    <MediaQuery smallerThan={"md"} styles={{ flexDirection: "row" }}>
      <Center
        sx={{
          padding: 128,
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper shadow="xs" p="md" sx={{ display: "flex", gap: 128 }}>
          <Image src={movie.image} radius="lg" width={256} />
          <Stack>
            <Title>{movie.title}</Title>
            <Title weight={"bold"}>
              {movie.original_title}/{movie.original_title_romanised}
            </Title>
            <Title italic>{movie.release_date}</Title>
            <Rating rating={movie.rt_score} maxStar={5} max={100} />
            <Text>{movie.description}</Text>
          </Stack>
        </Paper>
      </Center>
    </MediaQuery>
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
