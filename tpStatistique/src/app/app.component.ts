import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tpStatistique';

  tabStatistique: Statistique[] = [
    {
      identifiant: 'frezefzfzef',
      titre: 'statcontrole',
      valeur: 52,
      appreciation: 'warning',
    },
    {
      identifiant: 'zefzegzggzegze',
      titre: 'statdemerde',
      valeur: 70,
      appreciation: 'succes',
    },
  ];
}
