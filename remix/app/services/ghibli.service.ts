import { ghibliClient } from "~/clients";
import { ICharacter, IMovie } from "~/types";

export async function fetchGhibliCharacters(): Promise<ICharacter[]> {
  const characters = await ghibliClient.get<ICharacter[]>("/people");
  return characters.data;
}
export async function fetchGhibliMovies(): Promise<IMovie[]> {
  const movies = await ghibliClient.get<IMovie[]>("/films");
  return movies.data;
}

export async function fetchGhibliMovieById(id: string): Promise<IMovie | null> {
  const movie = await ghibliClient.get<IMovie>(`/films/${id}`);
  return movie.data;
}
