import { Component } from '@angular/core';
import { SearchType } from '../interfaces/search-type';
import { DiscoverMovie } from '../interfaces/discover-movie.interface';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Observable, lastValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-movie-search-result',
  templateUrl: './movie-search-result.component.html',
  styleUrls: ['./movie-search-result.component.scss'],
})
export class MovieSearchResultComponent {
  searchValue: string | undefined | null;
  searchType: string | undefined | null;
  movieSearchResult: DiscoverMovie | undefined;

  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    // this.route.queryParams.subscribe((queryParams) => {
    //   this.searchValue = queryParams['value'];
    //   this.searchType = queryParams['type'];
    //   console.log(this.searchValue);
    //   console.log(this.searchType);
    // });

    this.searchValue = this.route.snapshot.queryParamMap.get('value');
    if (this.searchValue === null || this.searchValue === undefined) {
      throw new Error('Search value not found');
    }
    this.searchType = this.route.snapshot.queryParamMap.get('type');
    if (this.searchType === null || this.searchType === undefined) {
      throw new Error('Search type not found');
    }

    if (this.searchType == 'movie') {
      this.movieSearchResult = await lastValueFrom(
        this.tmdb.searchMovieFromTitle(this.searchValue)
      );
      console.log(this.movieSearchResult);
    }
  }
}
