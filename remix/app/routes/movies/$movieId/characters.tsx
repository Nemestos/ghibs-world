import { Center, Title } from "@mantine/core";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ghibliClient } from "~/clients";
import CardGrid from "~/components/ui/CardGrid";
import CharacterCard from "~/components/ui/cards/CharacterCard";
import CardGridModal from "~/components/ui/modals/CardGridModal";
import characters from "~/routes/characters";
import {
  fetchCharactersFromMovie,
  fetchGhibliCharacterById,
  fetchGhibliMovieById,
} from "~/services/ghibli.service";
import { ICharacter } from "~/types";

type LoaderData = Awaited<ICharacter[]>;

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.movieId;
  const characters = await fetchCharactersFromMovie(id!);

  return json<LoaderData>(characters);
};

export default function MovieCharacters() {
  const data = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const onModalClose = () => navigate(-1);

  return (
    <CardGridModal
      data={data}
      keyExtractor={(item) => item.id}
      searchExtractor={(item) => item.name}
      render={(item) => <CharacterCard character={item} />}
      canSearch
      onClose={onModalClose}
      title={"Movie characters"}
    ></CardGridModal>
  );
}
