import { DiscoverMovieResult } from "./discover-movieresult.interface";

export interface DiscoverMovie {
  page: number;
  results: DiscoverMovieResult[];
  total_pages: number;
  total_results: number;
}
