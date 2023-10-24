import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { DiscoverMovieResult } from '../interfaces/discover-movieresult.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mostPopularMovie: DiscoverMovieResult | undefined;
  mostPopularMovieReleaseDate: Date | undefined;
  constructor(public tmdb: TmdbService) {}

  async ngOnInit() {
    this.mostPopularMovie = (
      await lastValueFrom(this.tmdb.getMostPopularMovies())
    ).results[0];

    this.mostPopularMovieReleaseDate = await new Date(
      (
        await lastValueFrom(this.tmdb.getMostPopularMovies())
      ).results[0].release_date + 'T00:00:00'
    );
  }
}
