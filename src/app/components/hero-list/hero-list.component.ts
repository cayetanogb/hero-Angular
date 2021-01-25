import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroList: Hero[];
  heroListFav: Hero[];

  constructor(private heroesService: HeroesService, private router: Router) {  
    this.heroListFav = this.heroesService.getHeroFav();
  }

  ngOnInit(): void {
    this.heroList = this.heroesService.getHeroes();
  }

  verHero(id: number) {
    this.router.navigate(['/heroes',id])
  }

  heroLike(heroe: Hero): void {
    const buscarHeroe = this.heroListFav.findIndex((hero) => hero.nombre === heroe.nombre);
    
     if (buscarHeroe < 0) {
      this.heroesService.setHeroFav(heroe);
      heroe.liked = true;
    }
  }

  heroDislike(heroe: Hero): void {
    const buscarHeroe = this.heroListFav.findIndex((hero) => hero.nombre === heroe.nombre);

    if (buscarHeroe >= 0) {
      this.heroListFav.splice(buscarHeroe, 1);
      heroe.liked = false;
    }
  }

}
