import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { InfoHeroComponent } from './components/info-hero/info-hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroListComponent},
    { path: 'info/:id', component: InfoHeroComponent},
    { path: 'buscador/:texto', component: BuscadorComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUNTING = RouterModule.forRoot(APP_ROUTES);