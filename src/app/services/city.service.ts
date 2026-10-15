import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { City } from '../core/interface/City';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CityService {

  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://localhost:5010/City';

  getAllCities() : Observable<City[]> {
    return this.http.post<City[]>(`${this.apiUrl}/ListarCiudades`, {});
  }

}
