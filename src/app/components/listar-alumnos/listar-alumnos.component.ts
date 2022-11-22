import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosServicesService } from 'src/app/services/alumnos-services.service';

//const ELEMENT_DATA: Alumno[];

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'dni', 'codigo', 'actions'];
  dataSource = new MatTableDataSource<Alumno>();
  alumno!: Alumno[];
  actionBtn : string = "Save";

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private alumnosServices: AlumnosServicesService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAlumnos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAlumnos() {
    this.alumnosServices.getAlumno().subscribe((data: Alumno[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  /*editAlumno() {
    this.alumnosServices.updateAlumno(id, this.alumno)
  }*/

  deleteAlumno(id: number) {
    this.alumnosServices.deleteAlumno(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Alumno) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('El Alumno fue eliminado con exito!', '', {
        duration: 6000,
      });
    });
  }

  

}
