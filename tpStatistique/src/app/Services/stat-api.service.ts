import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Statistique } from '../models/statistique';

@Injectable({
  providedIn: 'root',
})
export class StatApiService {
  private readonly API_URL = 'https://stats.naminilamy.fr';

  public statistiqueEnLigne: Statistique[] = [];

  constructor(private http: HttpClient) {}

  getStatistique(): Promise<Statistique[]> {
    return this.http
      .get(this.API_URL)
      .toPromise()
      .then((stat: any) => {
        this.statistiqueEnLigne = [];
        for (let s of stat) {
          this.statistiqueEnLigne.push(
            new Statistique(s.id, s.title, s.value, s.appreciation)
          );
        }

        return this.statistiqueEnLigne;
      });
  }
}
