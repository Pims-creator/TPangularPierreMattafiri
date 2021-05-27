import { Component } from '@angular/core';
import { Statistique } from './models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tpStatistique';

  statistique1: Statistique = {
    identifiant: 'eza a zaddxasxa',
    titre: 'statcontroleunitaire',
    valeur: 682,
    appreciation: 'warning',
  };

  statistique2: Statistique = {
    identifiant: 'eza jgku,f,ga',
    titre: 'statcontroledemographie',
    valeur: 52,
    appreciation: 'succes',
  };

  // tabStatistique: Statistique[] = [
  //   {
  //     identifiant: 'frezefzfzef',
  //     titre: 'statcontrole',
  //     valeur: 52,
  //     appreciation: 'warning',
  //   },
  //   {
  //     identifiant: 'zefzegzggzegze',
  //     titre: 'statdemerde',
  //     valeur: 70,
  //     appreciation: 'succes',
  //   },
  // ];
}
