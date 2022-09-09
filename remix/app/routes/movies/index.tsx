import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CardGrid from "~/components/ui/CardGrid";
import MovieCard from "~/components/ui/cards/MovieCard";
import { fetchGhibliMovies } from "~/services/ghibli.service";
import { IMovie } from "~/types";

type LoaderData = Awaited<ReturnType<typeof fetchGhibliMovies>>;

export const loader: LoaderFunction = async () => {
  const movies = await fetchGhibliMovies();
  return json<LoaderData>(movies);
};

export default function CharactersPage() {
  const movies = useLoaderData() as IMovie[];
  return (
    <CardGrid
      data={movies}
      keyExtractor={(item) => item.id}
      render={(item) => <MovieCard movie={item} />}
    ></CardGrid>
  );
}
