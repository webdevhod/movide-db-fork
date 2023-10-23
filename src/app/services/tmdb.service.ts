import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

import { environment } from '../../environments/environment';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../interfaces/movie.interface';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  constructor(private http: HttpClient) {}

  // GET movies from tmdb
  getMostPopularMovie(): Observable<DiscoverMovie> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${environment.tmdbAccessToken}`,
    });
    return this.http.get<DiscoverMovie>(environment.getMoviesUrl, {
      headers: headers,
    });
  }

  getYearFromReleaseDate(date : string | undefined): number{
    return date ? (new Date(Date.parse(date))).getFullYear(): 1900;
  }
}
