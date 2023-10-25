import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TmdbService } from '../services/tmdb.service';
import { Movie } from '../interfaces/movie.interface';
import { catchError, lastValueFrom, tap } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movieId: string | undefined | null;
  movie: Movie | undefined;
  posterPath: string = environment.posterPath;
  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    this.movieId = (this.route.snapshot.paramMap.get('movieId'));
    if (this.movieId === null || this.movieId === undefined) {
      throw new Error('Movie id not found');
    }
    this.movie = await lastValueFrom(this.tmdb.getMovieFromId(+this.movieId));
  }
}
