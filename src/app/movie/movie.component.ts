import { Component } from '@angular/core';
import { Card } from '../card';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent {
  movies:Card[] = []

  constructor(private dataServices: DataService) {
    this.dataServices.getMovies().subscribe((data:any) => {
      this.movies = data
      console.log(this.movies)
    })
  }
}