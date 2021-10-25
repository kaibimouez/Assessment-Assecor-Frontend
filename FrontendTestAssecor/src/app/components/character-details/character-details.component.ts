import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character/character.model';
import { FilmService } from 'src/app/services/film/film.service';
import {HttpClient} from '@angular/common/http';
import { Planet } from 'src/app/models/planet/planet.model';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  characterDetails: Character = {birth_year: "",gender: "",hair_color: "", eye_color: "",height: "",homeworld: "",mass: "",name: "",skin_color: "",films: []};
  planetDetails : Planet = {name : "", rotation_period: ""};
  constructor(private filmService:FilmService, private route: ActivatedRoute, private http:HttpClient) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmService.getCharacterByName(params['name']).subscribe((response: any) => {
        this.characterDetails = response.results[0];
        this.http.get<Planet>(this.characterDetails.homeworld).subscribe((res: Planet) => {
            this.planetDetails = res;
        })
      });
    })
  }
}
