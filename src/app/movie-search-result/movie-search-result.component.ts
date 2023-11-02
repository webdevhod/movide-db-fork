import { Component } from '@angular/core';
import { SearchType } from '../interfaces/search-type';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss']
})
export class MovieSearchResultComponent {
  searchTerm: string | undefined | null;
  movieSearchResult: DiscoverMovie | undefined;

  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    this.searchTerm = (this.route.snapshot.paramMap.get('value'));
    if (this.searchTerm === null || this.searchTerm === undefined) {
      throw new Error('Movie Search Term not found');
    }
    this.movieSearchResult = await lastValueFrom(this.tmdb.searchMovieFromTitle(this.searchTerm));
    }
  }

