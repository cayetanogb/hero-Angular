import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  @Input() id: number;
  @Input() nombre: string;
  @Input() bio: string;
  @Input() imagen: string;
  @Input() liked: boolean;
  @Input() aparicion: string;
  @Input() casa: string;

  @Output() like = new EventEmitter<Hero>(null);
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verHero() {
    this.router.navigate(['/heroes', this.id])
  }

  makeFav(): void {
    this.like.emit({
      nombre: this.nombre,
      bio: this.bio,
      imagen: this.imagen,
      liked: this.liked,
      aparicion: this.aparicion,
      casa: this.casa
    });
  }

}
