import { ghibliClient } from "~/clients";
import type { ICharacter, ILocation, IMovie } from "~/types";

export async function fetchGhibliCharacters(): Promise<ICharacter[]> {
  const characters = await ghibliClient.get<ICharacter[]>("/people");
  return characters.data;
}
export async function fetchGhibliCharacterById(
  id: string
): Promise<ICharacter> {
  const character = await ghibliClient.get<ICharacter>(`/people/${id}`);
  return character.data;
}
export async function fetchCharactersFromMovie(movieId: string) {
  const characters = await fetchGhibliCharacters();
  const filtered = characters.filter((character) =>
    character.films.some((filmUrl) => filmUrl.includes(movieId))
  );
  return filtered;
}

export async function fetchMovieFromCharacter(characterId: string) {
  const character = fetchGhibliCharacterById(characterId);
  const filmRequests = (await character).films.map((filmUrl) =>
    ghibliClient.get<IMovie>(filmUrl)
  );
  const filmsResps = await Promise.all(filmRequests);
  return filmsResps.map((resp) => resp.data);
}

export async function fetchResidentsFromLocation(locationId: string) {
  const location = await fetchGhibliLocationById(locationId);
  if (!location) {
    return [];
  }
  if (location.residents?.length > 0 && location.residents[0] === "TODO") {
    return [];
  }
  const residentsRequests = location.residents.map((characterUrl) =>
    ghibliClient.get<ICharacter>(characterUrl)
  );
  const residentsResps = await Promise.all(residentsRequests);
  return residentsResps.map((resp) => resp.data);
}

export async function fetchGhibliMovies(): Promise<IMovie[]> {
  const movies = await ghibliClient.get<IMovie[]>("/films");
  return movies.data;
}

export async function fetchGhibliMovieById(id: string): Promise<IMovie | null> {
  const movie = await ghibliClient.get<IMovie>(`/films/${id}`);
  return movie.data;
}

export async function fetchGhibliLocations(): Promise<ILocation[]> {
  const locations = await ghibliClient.get<ILocation[]>("/locations");
  return locations.data;
}

export async function fetchGhibliLocationById(
  id: string
): Promise<ILocation | null> {
  const location = await ghibliClient.get<ILocation>(`/locations/${id}`);
  return location.data;
}
