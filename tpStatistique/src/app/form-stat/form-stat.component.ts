import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StatApiService } from '../Services/stat-api.service';

@Component({
  selector: 'app-form-stat',
  templateUrl: './form-stat.component.html',
  styleUrls: ['./form-stat.component.css'],
})
export class FormStatComponent implements OnChanges {
  public titre!: string;
  public id!: string;
  public appreciation!: string;
  public valeur!: number;

  constructor(private apiService: StatApiService) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}

  onSubmit() {
    this.apiService;
    // .creerStatistique(this.titre, this.id, this.appreciation, this.valeur)
    // .then(() => {});
  }
}
