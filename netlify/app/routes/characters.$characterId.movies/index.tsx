import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import CharacterCard from "~/components/ui/cards/CharacterCard";
import MovieCard from "~/components/ui/cards/MovieCard";
import CardGridModal from "~/components/ui/modals/CardGridModal";
import { fetchMovieFromCharacter as fetchMoviesFromCharacter } from "~/services/ghibli.service";
import type { IMovie } from "~/types";

type LoaderData = Awaited<IMovie[]>;

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.characterId;
  const movies = await fetchMoviesFromCharacter(id!);

  return json<LoaderData>(movies);
};

export default function CharacterMovies() {
  const data = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const onModalClose = () => navigate(-1);

  return (
    <CardGridModal
      data={data}
      keyExtractor={(item) => item.id}
      searchExtractor={(item) => item.title}
      render={(item) => <MovieCard movie={item} />}
      canSearch
      onClose={onModalClose}
      title={"Character movies"}
    ></CardGridModal>
  );
}
