import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/models/film/film.model';
import { FilmService } from 'src/app/services/film/film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private filmService: FilmService, private router: Router) { }

  films: Film[] = [];

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): any {
    this.filmService.getFilms().subscribe((response: any) => {
      this.films = response.results;
    });
  }

}
