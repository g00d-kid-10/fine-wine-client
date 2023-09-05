import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MovieComponent } from './movie/movie.component';
import { TrailerComponent } from './trailer/trailer.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'', component:LandingComponent},
  {path:'movies', component:MovieComponent},
  {path:'tv-shows', component:TvShowsComponent},
  {path:'movies/trailer/:vid', component:TrailerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
