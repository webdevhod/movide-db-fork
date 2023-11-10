import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TmdbService } from '../services/tmdb.service';
import { Movie } from '../interfaces/movie.interface';
import { lastValueFrom } from 'rxjs';
import { MovieCast } from '../interfaces/movie-cast.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  movieId: string | undefined | null;
  movie: Movie | undefined;
  movieCredits: MovieCast | undefined
  movieCreditsPreviewSize: number = 4
  posterPath: string = environment.imagePathUrl;
  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    if (this.movieId === null || this.movieId === undefined) {
      throw new Error('Movie id not found');
    }
    // this.movie = await lastValueFrom(this.tmdb.getMovieFromId(+this.movieId));
    await lastValueFrom(this.tmdb.getMovieAndCredits(+this.movieId)).then(
      (results) => {
        this.movie = results['movie'];
        this.movieCredits = results['movieCast'];
      }
    );

  }
}
