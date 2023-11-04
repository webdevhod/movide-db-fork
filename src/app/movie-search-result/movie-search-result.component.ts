import { Component } from '@angular/core';
import { SearchType } from '../interfaces/search-type';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, lastValueFrom, map } from 'rxjs';
import { DiscoverMovieResult } from '../interfaces/discover-movieresult.interface';

@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss'],
})
export class MovieSearchResultComponent {
  searchValue: string = '';
  searchType: string = '';
  movieSearchResult: DiscoverMovie | undefined;
  movieResults: DiscoverMovieResult[] | undefined;

  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.searchValue = queryParams['value'];
      this.searchType = queryParams['type'];
      console.log(this.searchValue);
      console.log(this.searchType);

      if (this.searchType == 'movie') {
        lastValueFrom(this.tmdb.searchMovieFromTitle(this.searchValue)).then(
          (result: DiscoverMovie | undefined) => {
            console.log(result);
            this.movieSearchResult = result;
          }
        );
        this.movieResults = this.movieSearchResult?.results;
      }
    });
  }
}
