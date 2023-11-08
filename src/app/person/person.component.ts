import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TmdbService } from '../services/tmdb.service';
import { lastValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PersonDetails } from '../interfaces/person-details.interface';
import { MovieCredits } from '../interfaces/movie-credits';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  personId: string | undefined | null;
  person: PersonDetails | undefined;
  personMovieCredits: MovieCredits | undefined;
  imagePath: string = environment.imagePathUrl;
  constructor(private route: ActivatedRoute, public tmdb: TmdbService) {}

  async ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('personId');
    if (this.personId === null || this.personId === undefined) {
      throw new Error('person id not found');
    }
    this.person = await lastValueFrom(
      this.tmdb.getPersonFromId(+this.personId)
    );
    this.personMovieCredits = await lastValueFrom(
      this.tmdb.getPersonMovieCredits(+this.personId)
    );
  }
}
