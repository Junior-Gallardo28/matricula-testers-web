import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Curso } from 'src/app/models/curso';
import { CursoService } from '../../services/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {
  myForm!: FormGroup;
  curso!: Curso;
  idCurso!: any;
  constructor(
    private fb: FormBuilder,
    private cursoservice: CursoService,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) 
  {}

  ngOnInit(): void {
    this.loadCurso();
  }

  loadCurso(){
    this.idCurso = this.route.snapshot.paramMap.get('id');
    this.cursoservice.getCursoId(this.idCurso).subscribe((data)=>{
      this.curso = data;
      this.myForm = this.fb.group({
        id: this.idCurso,
        nombre:[this.curso.nombre, Validators.required],
        descripcion: [this.curso.descripcion, Validators.required]
      });
    });
  }

  updateCurso(): void{
    const curso: Curso ={
      id: this.idCurso,
      nombre: this.myForm.get('nombre')!.value,
      descripcion: this.myForm.get('descripcion')!.value
    };
    this.cursoservice.
    updateCurso(this.idCurso, curso).
    subscribe({
      next: (data) =>{
        this.snackbar.open('El curso ha sido actualizado con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['/']);
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }
  



}
