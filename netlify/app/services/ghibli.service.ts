import { ghibliClient } from "~/clients";
import type { ICharacter, IMovie } from "~/types";

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

export async function fetchGhibliMovies(): Promise<IMovie[]> {
  const movies = await ghibliClient.get<IMovie[]>("/films");
  return movies.data;
}

export async function fetchGhibliMovieById(id: string): Promise<IMovie | null> {
  const movie = await ghibliClient.get<IMovie>(`/films/${id}`);
  return movie.data;
}
