import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Film } from 'src/app/models/film/film.model';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character/character.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http:HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(environment.apiUrl + 'films');
  }

  getFilmByTitle(title: string):Observable<Film>{
    return this.http.get<Film>(environment.apiUrl + 'films/?search=' + title);
  }

  getCharacter(characterUrl:string): Observable<Character>{
    return this.http.get<Character>(characterUrl);
  }

  getCharacterByName(name: string): Observable<Character>{
    return this.http.get<Character>(environment.apiUrl + 'people/?search=' + name);
  }

}
