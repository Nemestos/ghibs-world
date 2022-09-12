import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import CharacterCard from "~/components/ui/cards/CharacterCard";
import MovieCard from "~/components/ui/cards/MovieCard";
import CardGridModal from "~/components/ui/modals/CardGridModal";
import {
  fetchMovieFromCharacter as fetchMoviesFromCharacter,
  fetchResidentsFromLocation,
} from "~/services/ghibli.service";
import type { ICharacter, IMovie } from "~/types";

type LoaderData = Awaited<ICharacter[]>;

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.locationId;
  const residents = await fetchResidentsFromLocation(id!);

  return json<LoaderData>(residents);
};

export default function CharacterMovies() {
  const data = useLoaderData<LoaderData>();
  const navigate = useNavigate();
  const onModalClose = () => navigate(-1);
  console.log(data);

  return (
    <CardGridModal
      data={data}
      keyExtractor={(item) => item.id}
      searchExtractor={(item) => item.name}
      render={(item) => <CharacterCard character={item} />}
      canSearch
      onClose={onModalClose}
      title={"Location Residents"}
    ></CardGridModal>
  );
}
