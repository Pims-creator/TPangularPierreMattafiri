import { Component } from '@angular/core';
import { Statistique } from './models/statistique';
import { StatApiService } from './Services/stat-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tpStatistique';

  tabStatistique: Statistique[] = [];

  // = [
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

  constructor(private Statapiserv: StatApiService) {
    // setTimeout(() => {
    //   this.tabStatistique.push(
    //     new Statistique(
    //       'hshrt',
    //       'ma nouvelle stat qui arrive après',
    //       76,
    //       'succes'
    //     )
    //   );
    // }, 3000);
    this.Statapiserv.getStatistique().then((stat) => {
      this.tabStatistique = stat;
    });
  }

  supprimerStatistique(stat: Statistique) {
    this.Statapiserv.supprimerStatistique(stat.identifiant);
    console.log('toto');
  }
}
