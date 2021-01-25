import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroList: Hero[];
  texto: string;
  heroListFav: Hero[];

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { 
    this.heroListFav = this.heroesService.getHeroFav();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.texto = params['texto'];
      this.heroList = this.heroesService.buscarHero(params['texto']);
    })

    this.heroListFav = this.heroesService.getHeroFav();
  }

  heroLike(heroe: Hero): void {
    const buscarHeroe = this.heroListFav.findIndex((hero) => hero.nombre === heroe.nombre);

    if (buscarHeroe < 0) {
      this.heroListFav.push(heroe);
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
