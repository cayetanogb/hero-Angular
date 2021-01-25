import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html'
})
export class InfoHeroComponent implements OnInit {

  hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroesService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.hero = this.heroService.getHero(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
