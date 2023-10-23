import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
// public id: string;
constructor(private route: ActivatedRoute) {}

ngOnInit() {
  //  this.id = this.route.snapshot.paramMap.get('movieId');
  console.log(this.route.snapshot.paramMap.get('movieId'));
}

}




