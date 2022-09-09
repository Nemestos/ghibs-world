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
} from "@mantine/core";
import { useColor } from "color-thief-react";
import { useEffect } from "react";
import type { IMovie } from "~/types";
import Rating from "../Rating";

function MovieDetailsOverlay({ movie }: { movie: IMovie }) {
  const theme = useMantineTheme();
  const { data, loading, error } = useColor(movie.image, "hex", {
    crossOrigin: "same-origin",
  });

  useEffect(() => {
    console.log(loading, data);
  }, [loading]);
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
        <Paper
          shadow="xs"
          p="md"
          sx={{ display: "flex", gap: 128, backgroundColor: data }}
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
