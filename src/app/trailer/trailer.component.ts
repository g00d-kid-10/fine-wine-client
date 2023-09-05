import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {
  constructor(private route: ActivatedRoute) {}
  
  videoId:any
  
  ngOnInit(): void {
    this.videoId = this.route.snapshot.paramMap.get('vid')
  }

  w = window.innerWidth
}
