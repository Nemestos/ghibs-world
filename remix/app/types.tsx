export interface IMovie {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: number;
  running_time: number;
  rt_score: number;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

export interface ICharacter {
  id: string;
  name: string;
  gender: string;
  age: number;
  eye_color: string;
  hair_color: string;
  films: string[];
  species: string[];
  url: string[];
}
