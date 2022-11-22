import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfesorService } from '../../services/profesor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';

@Component({
  selector: 'app-registrar-profesor',
  templateUrl: './registrar-profesor.component.html',
  styleUrls: ['./registrar-profesor.component.css']
})
export class RegistrarProfesorComponent implements OnInit {
  myForm!: FormGroup;
  actionBtn: string = "Save";
  constructor(
    private fb: FormBuilder,
    private profesorservice: ProfesorService,
    private snackbar: MatSnackBar,
    private router:Router
  ) 
  {}

  ngOnInit(): void {

    this.myForm = this.fb.group({
      id: [''],
      nombre: ['', [Validators.required,Validators.maxLength(20)]],
      apellido: ['', Validators.required],
      dni:['',[Validators.required, Validators.maxLength(8)]],
      codigo:['',[Validators.required, Validators.maxLength(8)]],
    });
  }

  saveProfesor():void{
    const profesor: Profesor = {
      id: 0,
      nombres: this.myForm.get('nombre')!.value,
      apellidos: this.myForm.get('apellido')!.value,
      dni: this.myForm.get('dni')!.value,
      codigo: this.myForm.get('codigo')!.value,
    };
    this.profesorservice.addProfesor(profesor).subscribe({
      next: (data) =>{
        this.snackbar.open('El profesor fue registrado con exito!', '',{
          duration: 6000,
        });
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
