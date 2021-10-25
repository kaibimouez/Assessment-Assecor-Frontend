import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { FilmDetailsComponent } from './components/film/film-details/film-details.component';
import { FilmComponent } from './components/film/film.component';

const routes: Routes = [
  { path: 'filme', component: FilmComponent},
  { path: 'filmDetails/:title', component: FilmDetailsComponent},
  { path: 'characterDetails/:name', component: CharacterDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
