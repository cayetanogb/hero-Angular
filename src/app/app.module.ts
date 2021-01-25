import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUNTING } from './app.routes';

// Servicios
import { HeroesService } from './services/heroes.service';

// Components
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    InfoHeroComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUNTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
