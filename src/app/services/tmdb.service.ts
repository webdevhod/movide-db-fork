import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { Movie } from '../interfaces/movie.interface';
import { MovieCast } from '../interfaces/movie-cast.interface';
import { Results } from '../interfaces/results.interface';
import { PersonDetails } from '../interfaces/person-details.interface';
import { MovieCredits } from '../interfaces/movie-credits';
import { MovieList } from '../interfaces/movie-list.interface';
import { MovieImages } from '../interfaces/movie-image.interface';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  options = {
    headers: {
      Authorization: `Bearer ${environment.tmdbAccessToken}`,
    },
  };

  constructor(private http: HttpClient) {}

  /**
   * GET 20 most popular movies from tmdb in given page
   * @param page
   * @returns List of 20 DiscoverMovieResult
   */
  getMostPopularMoviesList(page: number = 1): Observable<Results> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        page: page,
      },
    };
    return this.http.get<Results>(environment.getDiscoverMoviesUrl, options);
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
  getImageWithSize(
    jpgFileLink: string | undefined,
    sizeAsString: string = '500'
  ) {
    return jpgFileLink
      ? `${environment.imagePathUrl}${
          sizeAsString === 'original' ? '' : 'w'
        }${sizeAsString}${jpgFileLink}`
      : '';
  }

  getPosterLink(jpgFileLink: string | undefined): string {
    return this.getImageWithSize(jpgFileLink, '300');
  }

  getMovieThumbnailLink(jpgFileLink: string | undefined): string {
    return this.getImageWithSize(jpgFileLink, '92');
  }

  getThumbnailLink(jpgFileLink: string | undefined): string {
    return this.getImageWithSize(jpgFileLink, '185');
  }

  getPeopleProfileImageLink(jpgFileLink: string | undefined): string {
    return this.getImageWithSize(jpgFileLink, '92');
  }

  /**
   * GET at most 20 movies from tmdb with given keyword to search
   *
   * @param keyword search term for movie title
   * @param page page number
   * @returns List of 20 DiscoverMovieResult found by keyword
   */
  searchMovieFromTitle(keyword: string, page: number = 1): Observable<Results> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
        query: keyword,
        page: page,
      },
    };
    return this.http.get<Results>(environment.searchMoviesByTitleUrl, options);
  }

  getMovieCreditsFromId(movieId: number): Observable<MovieCast> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<MovieCast>(
      environment.getMovieCreditsUrl(movieId.toString()),
      options
    );
  }

  getMovieAndCredits(
    movieId: number
  ): Observable<{ movie: Movie; movieCast: MovieCast }> {
    return forkJoin({
      movie: this.getMovieFromId(movieId),
      movieCast: this.getMovieCreditsFromId(movieId),
    });
  }

  getTrendingPeopleFromRange(range: string): Observable<Results> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<Results>(
      environment.getTrendingPeopleUrl(range),
      options
    );
  }

  getPersonFromId(personId: number): Observable<PersonDetails> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<PersonDetails>(
      environment.getPersonUrl(personId.toString()),
      options
    );
  }

  getPersonMovieCredits(personId: number): Observable<MovieCredits> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<MovieCredits>(
      environment.getPersonMovieCreditsUrl(personId.toString()),
      options
    );
  }

  /**
   *
   * @param category now_playing, popular, top_rated, upcoming
   * @param page page number
   * @returns MovieList of size 20
   */
  getMoviesListFromCategory(
    category: string = 'now_playing',
    page: number = 1
  ): Observable<MovieList> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
        page: page,
      },
    };
    return this.http.get<MovieList>(
      environment.getMovieListUrl + category,
      options
    );
  }

  getMovieImages(movieId: string): Observable<MovieImages> {
    return this.http.get<MovieImages>(
      environment.getMovieImages(movieId),
      this.options
    );
  }
}
