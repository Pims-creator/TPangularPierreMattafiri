import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Statistique } from '../models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css'],
})
export class StatistiqueComponent implements OnInit {
  @Input() public uneStatistique!: Statistique;

  @Output() private demandeSuppression: EventEmitter<void>;

  constructor() {
    this.demandeSuppression = new EventEmitter();
  }

  traiterClicBouton() {
    this.demandeSuppression.emit();
    console.log('ordre btn recu');
  }

  ngOnInit(): void {}
}
