import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero-component.component.html',
  styleUrls: ['./hero-component.component.scss']
})
export class HeroComponentComponent implements OnInit {

  @Input() id: number;
  @Input() nombre: string;
  @Input() fuerza: number;
  @Input() imagen: string;
  @Input() liked: boolean;
  @Input() votes: number;

  @Output() like = new EventEmitter<Hero>(null);
  
  constructor() { }

  ngOnInit(): void {
  }

  makeFav(): void {
    this.like.emit({
      id: this.id,
      nombre: this.nombre,
      fuerza: this.fuerza,
      imagen: this.imagen,
      liked: this.liked,
      votes: this.votes
    });
  }

}
