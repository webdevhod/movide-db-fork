import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { PersonComponent } from './person/person.component';
import { MovieSearchResultComponent } from './movie-search-result/movie-search-result.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie/:movieId', component: MovieComponent },
  { path: 'movies/find', component: MovieSearchResultComponent },
  { path: 'person', component: PersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
