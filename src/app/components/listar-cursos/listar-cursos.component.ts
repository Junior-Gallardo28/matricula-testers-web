import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../models/curso';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrls: ['./listar-cursos.component.css']
})
export class ListarCursosComponent implements OnInit {
  displayedColumns: string [] = ['id','nombre','descripcion','actions'];
  dataSource = new MatTableDataSource<Curso>();
  curso!: Curso[];
  actionBtn: string = "Save";

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(

    private cursoservice: CursoService,
    private snackbar: MatSnackBar

  ){}

  ngOnInit(): void {
    this.getCurso();
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement). value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCurso(){
    this.cursoservice.getCurso().subscribe((data: Curso[]) =>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteCurso(id:number){
    this.cursoservice.deleteCurso(id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter((e: Curso)=>{
        return e.id !== id ? e : false;
      });
      this.snackbar.open('El curso ha sido eliminado con exito!', '',{
        duration: 6000,
      });
    });
  }

}
