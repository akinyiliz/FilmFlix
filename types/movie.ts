type MovieGenre = {
  id: number;
  name: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type Movie = {
  id?: number;
  title: string;
  name?: string;
  backdrop_path?: string;
  poster_path: string;
  release_date?: string;
  vote_average: number;
  genres?: MovieGenre[];
  overview?: string;
  tagline?: string;
  runtime?: number;
  type?: string;
  status?: string;
  first_air_date?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  production_countries?: ProductionCountry[];
};

export default Movie;
