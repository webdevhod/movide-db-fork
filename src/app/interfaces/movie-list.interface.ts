import { DiscoverMovieResult } from './discover-movie-result.interface';

export interface MovieList {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: DiscoverMovieResult[];
}
