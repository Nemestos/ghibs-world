import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import CardGrid from "~/components/ui/CardGrid";
import LocationCard from "~/components/ui/cards/LocationCard";
import { fetchGhibliLocations } from "~/services/ghibli.service";
import type { ICharacter } from "~/types";

type LoaderData = Awaited<ReturnType<typeof fetchGhibliLocations>>;

export const loader: LoaderFunction = async () => {
  const locations = await fetchGhibliLocations();
  return json<LoaderData>(locations);
};

export default function CharactersPage() {
  const locations = useLoaderData<LoaderData>();
  return (
    <div>
      <CardGrid
        data={locations}
        keyExtractor={(item) => item.id}
        searchExtractor={(item) => item.name}
        render={(item) => <LocationCard location={item} />}
        canSearch
      />
      <Outlet />
    </div>
  );
}
