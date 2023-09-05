import { Component } from '@angular/core';
import { Card } from '../card';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent {
  tvshows : Card[] = [];
  constructor(private dataService : DataService) {
    this.dataService.getTVShows().subscribe((data : any) => {
      this.tvshows = data;
      console.log(this.tvshows);
    })
  }
}
