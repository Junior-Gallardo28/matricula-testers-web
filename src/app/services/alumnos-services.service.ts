import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';
@Injectable({
  providedIn: 'root'
})
export class AlumnosServicesService {
  base_URL: string = environment.base_URL;
  constructor( private http: HttpClient) {}

  addAlumno(alumno:Alumno) {
    return this.http.post<Alumno>(this.base_URL, alumno);
  }
}
