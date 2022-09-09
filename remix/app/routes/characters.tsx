import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CardGrid from "~/components/ui/CardGrid";
import CharacterCard from "~/components/ui/cards/CharacterCard";
import { fetchGhibliCharacters } from "~/services/ghibli.service";
import type { ICharacter } from "~/types";

type LoaderData = Awaited<ReturnType<typeof fetchGhibliCharacters>>;

export const loader: LoaderFunction = async () => {
  const characters = await fetchGhibliCharacters();
  return json<LoaderData>(characters);
};

export default function CharactersPage() {
  const characters = useLoaderData() as ICharacter[];
  return (
    <CardGrid
      data={characters}
      keyExtractor={(item) => item.id}
      searchExtractor={(item) => item.name}
      render={(item) => <CharacterCard character={item} />}
      canSearch
    ></CardGrid>
  );
}
