import { Component } from '@angular/core';
import { TmdbService } from '../services/tmdb.service';
import { Movie } from '../interfaces/movie.interface';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  mostPopularMovie: Movie | undefined;
  constructor(public tmdb: TmdbService) {}

  async ngOnInit() {
    this.mostPopularMovie = (await lastValueFrom(
      this.tmdb.getMostPopularMovie()
    )).results[0];
  }
}
