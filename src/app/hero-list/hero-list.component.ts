import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes.data';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroList = Heroes;

  heroListFav;

  constructor() { }

  ngOnInit(): void {
    this.heroListFav = [];
  }

  heroLike(heroe: Hero): void {
    const buscarHeroe = this.heroListFav.findIndex((hero) => hero.id === heroe.id);

    if (buscarHeroe < 0) {
      this.heroListFav.push(heroe);
      heroe.liked = true;
    }
  }

  heroDislike(heroe: Hero): void {
    const buscarHeroe = this.heroListFav.findIndex((hero) => hero.id === heroe.id);

    if (buscarHeroe >= 0) {
      this.heroListFav.splice(buscarHeroe, 1);
      heroe.liked = false;
    }
  }

}
