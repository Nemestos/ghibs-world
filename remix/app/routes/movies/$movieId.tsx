import type { LoaderFunction } from "@remix-run/node";
import { json, Response } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ghibliClient } from "~/clients";
import MovieDetails from "~/components/ui/cards/MovieDetails";
import { fetchGhibliMovieById } from "~/services/ghibli.service";
import type { IMovie } from "~/types";
type LoaderData = Awaited<ReturnType<typeof fetchGhibliMovieById>>;

export const loader: LoaderFunction = async ({ params }) => {
  const movieId = params.movieId!;
  const movie = await fetchGhibliMovieById(movieId);
  if (!movieId) {
    throw new Response(`Cannot find movie with id ${movieId}`, {
      status: 404,
    });
  }

  return json<LoaderData>(movie);
};

export default function CharacterPage() {
  const movie = useLoaderData() as IMovie;
  return <MovieDetails movie={movie} />;
}
