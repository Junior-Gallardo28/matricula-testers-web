import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Profesor } from 'src/app/models/profesor';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-listar-profesores',
  templateUrl: './listar-profesores.component.html',
  styleUrls: ['./listar-profesores.component.css']
})
export class ListarProfesoresComponent implements OnInit {
  displayedColumns: string [] = ['id', 'nombre', 'apellido', 'dni', 'codigo', 'actions'];
  dataSource = new MatTableDataSource<Profesor>();
  profesor!: Profesor[];
  actionBtn: string = "Save";

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(

     private profesorService: ProfesorService,
     private snackbar: MatSnackBar 

  )
  {}

  ngOnInit(): void {
    this.getProfesor();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProfesor(){
    this.profesorService.getProfesor().subscribe((data: Profesor[])=>{
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    });
  }

  deleteProfesor(id:number){
    this.profesorService.deleteProfesor(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((e: Profesor)=>{
        return e.id !== id ? e : false;
      });
      this.snackbar.open('El profesor ha sido eliminado con exito!', '',{
        duration: 6000,
      });
    });
  }

}
