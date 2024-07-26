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
  backdrop_path?: string;
  poster_path: string;
  release_date?: string;
  vote_average: number;
  genres?: MovieGenre[];
  overview?: string;
  tagline?: string;
  runtime?: number;
  production_countries?: ProductionCountry[];
};

export default Movie;
