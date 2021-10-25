import { Film } from "../film/film.model";

export class Character {
    name!: string;
    height!: string;
    hair_color!: string;
    skin_color!: string;
    eye_color!: string;
    homeworld!: string;
    gender!: string;
    birth_year!: string;
    mass!: string;
    films!: Array<Film>[];

}
