import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  // GET Popular movie from tmdb
  getMostPopularMovies(): Observable<DiscoverMovie> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
    };
    return this.http.get<DiscoverMovie>(environment.getDiscoverMoviesUrl,options
    );
  }

  // GET movies from tmdb
  getMovieFromId(movieId: number): Observable<Movie> {
    const options = {
      headers: {
        Authorization: `Bearer ${environment.tmdbAccessToken}`,
      },
      params: {
        language: 'en-US',
      },
    };
    return this.http.get<Movie>(`${environment.getMoviesUrl}${movieId}`, options);
  }
}
