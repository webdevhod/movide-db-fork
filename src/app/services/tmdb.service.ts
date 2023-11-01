import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';
import { Movie } from '../interfaces/movie.interface';
import { DiscoverMovieResult } from '../interfaces/discover-movieresult.interface';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  /**
   * GET 20 most popular movie from tmdb in given page
   * @param page
   * @returns List of 20 DiscoverMovieResult
   */
  getMostPopularMoviesList(page: number = 1): Observable<DiscoverMovie> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        page: page,
      },
    };
    return this.http.get<DiscoverMovie>(
      environment.getDiscoverMoviesUrl,
      options
    );
  }

  /**
   * // GET movies from tmdb
   * @param movieId
   * @returns Movie
   */
  getMovieFromId(movieId: number): Observable<Movie> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<Movie>(
      `${environment.getMoviesUrl}${movieId}`,
      options
    );
  }

  /**
   * Possible link:
   * https://www.themoviedb.org/talk/5aeaaf56c3a3682ddf0010de
   * https://image.tmdb.org/t/p/w92/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/w154/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/w185/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/w342/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * https://image.tmdb.org/t/p/original/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg
   * @param jpgFileLink
   * @param sizeAsString
   * @returns Link to movie poster with size
   */
  getMoviePosterFromSize(
    jpgFileLink: string | undefined,
    sizeAsString: string = '500'
  ) {
    return jpgFileLink
      ? `${environment.posterPath}${
          sizeAsString === 'original' ? '' : 'w'
        }${sizeAsString}${jpgFileLink}`
      : '';
  }

  getPosterLink(jpgFileLink: string | undefined): string {
    return this.getMoviePosterFromSize(jpgFileLink, '300');
  }

  getThumbnailLink(jpgFileLink: string | undefined): string {
    return this.getMoviePosterFromSize(jpgFileLink, '185');
  }
}
