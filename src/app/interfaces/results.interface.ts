import { DiscoverMovieResult } from "./discover-movie-result.interface";
import { TrendingPeoples } from "./trending-peoples.interface";

export interface Results {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}
