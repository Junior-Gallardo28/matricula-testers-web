import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';
import { AlumnosServicesService } from '../../services/alumnos-services.service';
@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  myForm!: FormGroup;
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router, private alumnosservice: AlumnosServicesService) { }

  ngOnInit(): void {this.reactiveForm();}

  reactiveForm(){
    this.myForm = this.fb.group({
      id: [''],
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      codigo: ['', [Validators.required]]
    })
  }

  saveAlumnos(){
    const alumno: Alumno = {
      nombres: this.myForm.get('nombre-alumno')!.value,
      apellidos: this.myForm.get('apellidos-alumno')!.value,
      dni: this.myForm.get('DNI-alumno')!.value,
      codigo: this.myForm.get('codigo-alumno')!.value,
    };
    
    this.alumnosservice.addAlumnos(alumno).subscribe({
      next:(data) => {
        this.snackBar.open('El alumno ha sido registrado exitosamente!', '',{
          duration: 6000,
        });
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })

  }

}