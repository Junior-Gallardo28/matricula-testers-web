import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from 'src/app/services/curso.service';
import { Admin } from 'src/app/models/admin';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosServicesService } from '../../services/alumnos-services.service';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from '../../services/profesor.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumnsAlumnos: string[] = ['id', 'nombre','apellido','dni','codigo'];
  dataSourceAlumnos = new MatTableDataSource<Alumno>();
  alumno_home !: Alumno[];

  displayedColumnsProfesor: string [] = ['id', 'nombre', 'apellido', 'dni', 'codigo'];
  dataSourceProfesor = new MatTableDataSource<Profesor>();
  profesor_home !: Profesor[];

  displayedColumnsCurso: string[] = ['id', 'nombre','descripcion'];
  dataSourceCurso = new MatTableDataSource<Curso>();
  curso_home !: Curso[];
  constructor(
    private alumnosserviceshome : AlumnosServicesService,
    private profesorservicehome : ProfesorService,
    private cursoservicehome : CursoService
  ) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.getProfesor();
    this.getCurso();
  }

  getAlumnos(){
    this.alumnosserviceshome.getAlumno().subscribe((data: Alumno[])=>{
      this.dataSourceAlumnos = new MatTableDataSource(data);
    });
  }

  getProfesor(){
    this.profesorservicehome.getProfesor().subscribe((data_profesor: Profesor[])=>{
      this.dataSourceProfesor = new MatTableDataSource(data_profesor);
    })
  }

  getCurso(){
    this.cursoservicehome.getCurso().subscribe((data_curso: Curso[]) => {
      this.dataSourceCurso = new MatTableDataSource(data_curso);
    })
  }
  

}
