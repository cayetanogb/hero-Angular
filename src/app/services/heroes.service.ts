import { Injectable } from '@angular/core';
import { Heroes } from '../heroes.data';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes = Heroes;
  private heroListFav: Hero[] = [];

  constructor() { 
    console.log("servicios listo para usar")
  }

  getHeroes() {
    return this.heroes;
  }

  getHeroFav() {
    return this.heroListFav;
  }

  setHeroFav(hero: Hero) {
    this.heroListFav.push(hero);
  }

  getHero(id: string) {
    return this.heroes[id];
  }

  buscarHero(texto: string) {
    let heroesArr: Hero[] = [];
    texto = texto.toLocaleLowerCase();

    for (let i = 0; i < this.heroes.length; i ++) {
      let hero = this.heroes[i];
      let nombre = hero.nombre.toLocaleLowerCase();

      if (nombre.indexOf(texto) >= 0) {
        hero.id = i;
        heroesArr.push(hero);
      }
    }

    return heroesArr;
  }
}