import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CursoService } from '../../services/curso.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-registrar-curso',
  templateUrl: './registrar-curso.component.html',
  styleUrls: ['./registrar-curso.component.css']
})
export class RegistrarCursoComponent implements OnInit {
  myForm!: FormGroup;
  actionBtn: string = "Save";
  constructor(
    private fb: FormBuilder,
    private cursoservice: CursoService,
    private snackbar: MatSnackBar,
    private router: Router
  )
  {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  saveCurso(): void{
    const curso: Curso ={ 
      id: 0,
      nombre: this.myForm.get('nombre')!.value,
      descripcion: this.myForm.get('descripcion')!.value,
    };
    this.cursoservice.addCurso(curso).subscribe({
      next:(data)=>{
        this.snackbar.open('El curso fue registrado con exito!', '',{
          duration: 6000,
        });
        this.router.navigate(['/']);
      },
      error: (err) =>{
        console.log(err);
      },
    });
  }

}
