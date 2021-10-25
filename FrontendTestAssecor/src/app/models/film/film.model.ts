import { Character } from "../character/character.model";

export class Film {
    title!: string;
    director!: string;
    producer!: string;
    release_date!: string;
    opening_crawl!: string;
    episode_id!: string;
    characters!: Array<Character>[];
}
