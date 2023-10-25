import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { DiscoverMovieResult } from '../interfaces/discover-movieresult.interface';
import { Movie } from '../interfaces/movie.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mostPopularMovieId: number | undefined;
  mostPopularMovie: Movie | undefined;
  constructor(public tmdb: TmdbService) {}

  async ngOnInit() {
    this.mostPopularMovieId = (
      await lastValueFrom(this.tmdb.getMostPopularMovies())
    ).results[0].id;
    this.mostPopularMovie = (await lastValueFrom(this.tmdb.getMovieFromId(this.mostPopularMovieId)));
  }
}
