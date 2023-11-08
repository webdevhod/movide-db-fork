import { MovieCreditCast } from './movie-credit-cast.interface';
import { MovieCreditCrew } from './movie-credit-crew';

export interface MovieCredits {
  cast: MovieCreditCast[];
  crew: MovieCreditCrew[];
  id: number;
}
