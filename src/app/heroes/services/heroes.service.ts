import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http : HttpClient) { }

  getHeroes() : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${environment.url}/heroes`);
  }

  getForId(id : string) : Observable<Heroe>{
    return this.http.get<Heroe>(`${environment.url}/heroes/${id}`)
  }

  getSugerenciasHeroes(termino :string) : Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${environment.url}/heroes?q=${termino}&_limit=6`);
  }

  addHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${environment.url}/heroes`,heroe)
  }

  updateHeroe(heroe:Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${environment.url}/heroes/${heroe.id}`,heroe)
  }

  deleteHeroe(heroe: Heroe): Observable<any>{
    return this.http.delete<any>(`${environment.url}/heroes/${heroe.id}`)
  }

}
