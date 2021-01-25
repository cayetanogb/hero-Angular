import { Component } from '@angular/core';
import { Heroes } from './heroes.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'hero';

  heroList = Heroes;
}
