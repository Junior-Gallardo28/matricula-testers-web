import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../models/profesor';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  base_URL_Curso: string  = environment.base_URL_Curso;
  
  constructor(private http: HttpClient){}

  addCurso(curso: Curso){
    return this.http.post<Curso>(this.base_URL_Curso,curso);
  }

  updateCurso(id: any, curso: Curso){
    return this.http.put<Curso>(`${this.base_URL_Curso}/${id}`, curso);
  }

  deleteCurso(id: any){
    return this.http.delete<Curso>(`${this.base_URL_Curso}/${id}`);
  }

  getCurso(){
    return this.http.get<Curso[]>(this.base_URL_Curso);
  }

  getCursoId(id:any){
    return this.http.get<Curso>(`${this.base_URL_Curso}/${id}`);
  }



}
