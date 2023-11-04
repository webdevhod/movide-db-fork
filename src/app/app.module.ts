import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { MovieSearchResultComponent } from './movie-search-result/movie-search-result.component';
import { PersonComponent } from './person/person.component';

import { DatePipe } from '@angular/common';
import { RuntimeConverterPipe } from './pipes/runtime-converter.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieComponent,
    PersonComponent,
    RuntimeConverterPipe,
    MovieSearchResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    InputTextModule,
    TableModule,
  ],
  providers: [DatePipe, RuntimeConverterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
