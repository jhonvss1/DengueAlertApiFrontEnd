import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DengueAlert } from '../model/dengue-alert';
import { environments } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DengueService {
  private apiUrl = `${environments.apiUrl}/api/Dengue`;

  constructor(private http: HttpClient) { }

  getAllAlerts(): Observable<DengueAlert[]> {
    return this.http.get<DengueAlert[]>(this.apiUrl);
    return this.http.get<DengueAlert[]>(this.apiUrl).pipe(
      map((response: any[]) => {
        console.log('Resposta bruta da API:', response);
        return response.map(item => ({
          ...item,
          // Garante que a semana seja tratada como string para filtro
          epidemologicalWeek: item.epidemologicalWeek,
          // Formata a data se necessário
          createdAt: new Date(item.createdAt).toISOString()
        }));
      })
    );
  }
}