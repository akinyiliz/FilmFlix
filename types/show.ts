type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type MovieGenre = {
  id: number;
  name: string;
};

type Show = {
  id?: number;
  name: string;
  backdrop_path?: string;
  poster_path: string;
  first_air_date?: string;
  vote_average: number;
  overview?: string;
  type?: string;
  tagline?: string;
  status?: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  production_countries?: ProductionCountry[];
  genres?: MovieGenre[];
};

export default Show;
