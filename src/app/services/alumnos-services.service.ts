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

  getAlumno() {
    return this.http.get<Alumno[]>(this.base_URL);
  }

  getAlumnoId(id: any) {
    return this.http.get<Alumno>(`${this.base_URL}/${id}`);
  }

  updateAlumno(id: any, alumno: Alumno) {
    return this.http.put<Alumno>(`${this.base_URL}/${id}`, alumno);
  }

  deleteAlumno(id: any) {
    return this.http.delete<Alumno>(`${this.base_URL}/${id}`);
  }
}
