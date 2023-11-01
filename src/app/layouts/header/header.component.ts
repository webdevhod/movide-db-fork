import { Component } from '@angular/core';
interface SearchType {
  name: string;
  type: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  searchTerm: string | undefined = '';
  searchTypes: SearchType[] | undefined;
  selectedSearchType: SearchType | undefined;

  ngOnInit() {
    this.searchTypes = [
      { name: 'Keyword', type: 'keyword' },
      { name: 'Movie', type: 'movie' },
      { name: 'Person', type: 'person' },
    ];
  }
  handleSearch() {
    console.log(this.searchTerm);
  }
}
