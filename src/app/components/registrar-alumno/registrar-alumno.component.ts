import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Alumno } from '../../models/alumno';
import { AlumnosServicesService } from '../../services/alumnos-services.service';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  myForm !: FormGroup;
  actionBtn: string = "Save";
  constructor(private fb: FormBuilder, private alumnosservice: AlumnosServicesService, 
    private snackBar: MatSnackBar,
    private router: Router

   ) { }

  ngOnInit(): void {

      this.myForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      dni: ['', Validators.required],
      codigo: ['', Validators.required],

  });
  } 

  saveAlumnos(): void {
    const alumno:Alumno = {
      id: 0,
      nombres: this.myForm.get('nombre')!.value,
      apellidos: this.myForm.get('apellido')!.value,
      dni: this.myForm.get('dni')!.value,
      codigo: this.myForm.get('codigo')!.value,
    };
    this.alumnosservice.addAlumno(alumno).subscribe({
      next: (data) => {
        this.snackBar.open('El knowledge fue registrado con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['/business/knowledges']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  

}