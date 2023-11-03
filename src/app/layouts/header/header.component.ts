import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchType } from 'src/app/interfaces/search-type';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string = '';
  searchTypes: SearchType[] | undefined;
  selectedSearchType: SearchType | undefined;

  constructor(private router: Router, public tmdb: TmdbService) {}

  ngOnInit() {
    this.searchTypes = [
      { name: 'Keyword', type: 'keyword' },
      { name: 'Movie', type: 'movie' },
      { name: 'Person', type: 'person' },
    ];
  }

  handleSearch() {
    this.router.navigate(['movies/find'], {
      queryParams: { value: this.searchTerm, type: this.selectedSearchType?.type},
    });
  }
}
