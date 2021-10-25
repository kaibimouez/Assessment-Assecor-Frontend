import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character/character.model';
import { Film } from 'src/app/models/film/film.model';
import { FilmService } from 'src/app/services/film/film.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private router : Router, private route: ActivatedRoute, private filmService: FilmService) { }
  film: Film = {title: "",director: "",opening_crawl: "",producer: "",release_date: "",episode_id: "",characters: [] };
  characters: Character[] = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.filmService.getFilmByTitle(params['title']).subscribe((response: any) => {
        this.film = response.results[0];
        this.film.characters.forEach((characterUrl:any) => {
           this.filmService.getCharacter(characterUrl).subscribe((response: any) => {
            this.characters.push(response);
          });
        });
      });
    });
  }
}
