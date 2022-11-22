import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../models/profesor';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  base_URL_Profesor: string = environment.base_URL_Profesor;
  constructor(private http: HttpClient) {}

  addProfesor(profesor: Profesor){
    return this.http.post<Profesor>(this.base_URL_Profesor, profesor);
  }

  updateProfesor(id: any,profesor:Profesor){
    return this.http.put<Profesor>(`${this.base_URL_Profesor}/${id}`, profesor);
  }

  deleteProfesor(id: any){
    return this.http.delete<Profesor>(`${this.base_URL_Profesor}/${id}`);
  }

  getProfesor(){
    return this.http.get<Profesor[]>(this.base_URL_Profesor);
  }

  getProfesorId(id:any){
    return this.http.get<Profesor>(`${this.base_URL_Profesor}/${id}`);
  }

}
