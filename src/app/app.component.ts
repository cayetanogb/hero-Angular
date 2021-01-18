import { Component } from '@angular/core';
import { Heroes } from './heroes.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hero';

  heroList = Heroes;
}
